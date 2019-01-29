import models, { sequelize } from '../database/models'
import voucher_codes from 'voucher-code-generator'
import { loadAccount, buyVoucher } from '../stellar/TransactionBuilder';
const isStockAvailable = id => {
    return new Promise((resolve, reject) => {
        models.sequelize.query('SELECT EXISTS(SELECT * FROM rl_tmp_points WHERE order_id = ' + id + ') as "order_exist"')
            .then(function (result) {
                resolve(result)
            })
            .catch(function (error) {
                reject(error)
            })
    });
};

export const showListVoucher = (req, res) => {

    models.sequelize.query('SELECT * FROM rl_redeem_points as rp JOIN rl_ms_promo as mp ON rp.promo_id = mp.id WHERE mp.number_of_ticket_promo > 0')
        .then(function (result) {
            res.status(200).send(result[0])
        })
        .catch(function (error) {
            res.status(500).send(error)
        })
}

export const buyVouchers = async (req, res) => {
    const account = req.body.source_account
    const result = await loadAccount(account)
    const balance = result.balances[0].balance
    const secret_key = req.body.secret_key
    const points = req.body.points
    const promo_id = req.body.promo_id
    const user_id = req.body.user_id
    const email = req.body.email

    if (parseFloat(points.toFixed(7)) < parseFloat(balance.toString())) {
        /**
         * comment due to trust limit
         * validasi error
         */
        // await buyVoucher(account,secret_key,points.toString()) 
        const order_exist = await isStockAvailable(promo_id)
        if (order_exist) {
            let code = voucher_codes.generate({
                prefix: 'RLL',
                length: 5,
                charset: voucher_codes.charset('alphanumeric')
            });
             await models.rl_voucher_codes.create({
                promo_id:promo_id,
                voucher_code:code[0],
                is_use:"N",
                user_id:user_id,
                email:email,
                release_date:sequelize.fn('NOW')
            })
            res.sendStatus(200)
        }
    }
    else {
        res.send({
            success: false
        })
    }


}

