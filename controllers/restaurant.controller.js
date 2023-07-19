const Restaurant = require("../models/restaurant.model")

//Insert Data
Restaurant.createRestaurant = async(newRestaurant)=>{
    try {
        const createRestaurant = await Restaurant.create(newRestaurant);
        console.log("created restaurant:", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (erroe) {
        console.log("err", err);
        throw err;
    }
}

module.exports = Restaurant;