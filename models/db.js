const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('registro', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Connection has been estabilished sucessfully.')
}).catch(function(){
    console.log('Unable to connect to the database.')
});

module.exports = sequelize;