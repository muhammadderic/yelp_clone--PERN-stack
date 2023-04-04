const db = require("../db/db");

// CREATE DATA
const createRestaurant = async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const results = await db.query(
      "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *", [name, location, price_range]
    );
    res.status(201).json({
      restaurant: results.rows[0]
    })
  } catch (error) {
    console.error(error.message);
  }
}

// GET ALL DATA
const getAllRestaurants = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT * FROM restaurants"
    );
    res.status(200).json({
      restaurants: results.rows
    })
  } catch (error) {
    console.error(error.message);
  }
}

// GET SINGLE DATA
const getRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await db.query(
      "SELECT * FROM restaurants WHERE restaurant_id=$1", [id]
    );
    res.status(200).json({
      restaurant: results.rows[0]
    })
  } catch (error) {
    console.error(error.message);
  }
}

// UPDATE DATA
const updateRestaurant = async (req, res) => {
  try {
    res.send("Update Restaurant");
  } catch (error) {
    console.error(error.message);
  }
}

// DELETE DATA
const deleteRestaurant = async (req, res) => {
  try {
    res.send("Delete Restaurant");
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant
}