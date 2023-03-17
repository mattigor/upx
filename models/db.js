const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('registro', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been estabilished sucessfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;