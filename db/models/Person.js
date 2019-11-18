const Sequelize = require('sequelize');
const { db } = require('../connection');
const { BOOLEAN, VIRTUAL, DECIMAL, STRING, } = Sequelize;

// const uuidDefinition = {
//     type: UUID,
//     primaryKey: true,
//     defaultValue: UUIDV4
// }

const Person = db.define('person', {
    name: {
        type: STRING,
        allowNull: false,
    },
    isAttending: {
        type: BOOLEAN,
        allowNull: false,
    },

});

module.exports = { Person };
