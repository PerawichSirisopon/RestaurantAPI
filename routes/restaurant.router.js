const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model");
const {
    error
} = require("console");

//Insert restaurant to database
//http://localhost:5000/restaurants
router.post("/restaurants", async (req, res) => {
    try {
        const newRestaurant = req.body;
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant);
        res.status(201).json(createRestaurant)
    } catch (err) {
        res.status(500).json({error:"Failed to create restaurant"})
    }
})

module.exports = router;