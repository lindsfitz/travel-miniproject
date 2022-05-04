const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');


// Location has many trip

Location.hasMany(Trip, {
    foreignKey:'location_id',
    unique:false
})

// Traveller has many trip

Traveller.hasMany(Trip, {
    foreignKey:'traveller_id',
    unique: false
})



module.exports = { Traveller, Location, Trip };