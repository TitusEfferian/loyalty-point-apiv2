/**
 * bagian ini ditulis manual dengan referensi pada https://github.com/sequelize/sequelize-auto
 * yang bertujuan untuk membuat models berdasarkan table yang sudah ada,
 * cara menjalankan script ini, cukup buka terminal dan siapkan path berada pada lokasi folder ./database
 * dan jalankan 'node generateExistsModels.js'
 */
var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('ralaliweb_db','intern_Rll_2018','Ralali2018_RLL_Intern',{
    host:'149.129.214.194',
    port:3308,
    dialect:'mysql',
    tables:['rl_user_key','rl_tmp_points','rl_redeem_points','rl_ms_promo','rl_voucher_codes'],
    additional: {
        timestamps: false
    },
})

auto.run(function(err){
    if(err) throw err
    console.log(auto.tables)
})