const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init(
    {
        id: {

        },
        trip_budget: {

        },
        traveller_amount: {

        },
        traveller_id: {
            // foreign key references traveller

        },
        location_id: {
            // foreign key references location

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip'
    }
);



module.exports = Trip;