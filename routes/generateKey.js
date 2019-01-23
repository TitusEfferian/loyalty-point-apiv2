var express = require('express');
var router = express.Router();
var models = require('../database/models')
import StellarSdk from 'stellar-sdk'
import { createAccount, changeTrust } from '../stellar/TransactionBuilder';

router.post('/', async function (req, res) {
    const result = StellarSdk.Keypair.random()
    const user_id = req.body.id
    const pub_key = result.publicKey()
    const priv_key = result.secret();
    const resultCreateAccount = await createAccount(pub_key)
    const resultChangeTrust = await changeTrust(pub_key, priv_key);
    models.rl_user_key.create({
        user_id: user_id,
        public_key: pub_key,
        private_key: priv_key
    })
        .then(function () {
            res.status(200).send({
                createAccount: resultCreateAccount,
                changeTrust: resultChangeTrust
            })
        })
        .catch(function (error) {
            res.status(500).send({ data: error })
        })
})

export default router
