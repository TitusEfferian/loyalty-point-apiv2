import models from '../database/models'
import voucher_codes from 'voucher-code-generator'
const isStockAvailable = id => {
    return new Promise((resolve, reject) => {
        models.sequelize.query('SELECT EXISTS(SELECT * FROM rl_tmp_points WHERE order_id = '+id+') as "order_exist"')
        .then(function(result){
            resolve(result)
        })
        .catch(function(error){
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

// export const generateVoucher = (req, res) => {
//     const user_id = req.body.userId;
//     const email = req.body.email;
//     const promo_id = req.body.promoId;

//     isStockAvailable(promo_id)
//     .then(function(){
//         let code = voucher_codes.generate({
//             prefix: 'RLL',
//             length: 5,
//             charset: voucher_codes.charset('alphanumeric')
//         })

//         models.sequelize.query('INSERT INTO rl_voucher_codes(promo_id,voucher_code,is_use,user_id,email,release_date) VALUES('+promo_id+','+code+',"N",'+user_id+','+email+',now())')
//         .then(function(){
//             res.status(200).send({
//                 status:'generate success'
//             })
//         })
//         .catch(function(err){
//             res.status(500).send(err)
//         })
//     })
// }

