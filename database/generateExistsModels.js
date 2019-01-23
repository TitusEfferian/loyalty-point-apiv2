var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('ralaliweb_db','intern_Rll_2018','Ralali2018_RLL_Intern',{
    host:'149.129.214.194',
    port:3308,
    dialect:'mysql',
    tables:['rl_user_key'],
    additional: {
        timestamps: false
    },
})

auto.run(function(err){
    if(err) throw err
    console.log(auto.tables)
})