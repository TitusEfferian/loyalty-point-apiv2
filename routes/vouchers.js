import express from 'express'
var router = express.Router();
import models from '../database/models'
router.get('/list', function (req, res) {
    /**
     * butuh diganti menggunakan models,
     * yang ini masih menggunakan query mentah
     */
    models.sequelize.query('SELECT * FROM rl_redeem_points as rp JOIN rl_ms_promo as mp ON rp.promo_id = mp.id WHERE mp.number_of_ticket_promo > 0')
    .then(function(result){
        res.status(200).send(result[0])
    })
    .catch(function(error){
        res.status(500).send(error)
    })
});

export default router
