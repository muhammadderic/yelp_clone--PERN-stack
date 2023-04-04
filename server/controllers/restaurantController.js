const db = require("../db/db");

// CREATE DATA
const createRestaurant = (req, res) => {
  res.send("Create Restaurant");
}

// GET ALL DATA
const getAllRestaurants = (req, res) => {
  res.send("Get All Restaurants");
}

// GET SINGLE DATA
const getRestaurant = (req, res) => {
  res.send("Get Restaurant");
}

// UPDATE DATA
const updateRestaurant = (req, res) => {
  res.send("Update Restaurant");
}

// DELETE DATA
const deleteRestaurant = (req, res) => {
  res.send("Delete Restaurant");
}

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant
}