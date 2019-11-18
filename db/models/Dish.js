const Sequelize = require('sequelize');
const { db } = require('../connection');
const { VIRTUAL, DECIMAL, STRING } = Sequelize;

// const uuidDefinition = {
//     primaryKey: true,
//     defaultValue: UUIDV4
// }

const Dish = db.define('dish', {
    name:{
        type: STRING,
        allowNull: false,},
    description: {
        type: STRING,
        allowNull: false,
    },

});

module.exports = { Dish };

