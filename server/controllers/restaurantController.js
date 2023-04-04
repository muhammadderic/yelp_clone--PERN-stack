const db = require("../db/db");

// CREATE DATA
const createRestaurant = async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const results = await db.query(
      "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *;", [name, location, price_range]
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
      "SELECT * FROM restaurants;"
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
      "SELECT * FROM restaurants WHERE restaurant_id=$1;", [id]
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
    const { name, location, price_range } = req.body;
    const id = req.params.id;
    const results = await db.query(
      "UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE restaurant_id=$4 RETURNING *;", [name, location, price_range, id]
    );
    res.status(200).json({
      updateRestaurant: results.rows[0]
    })
  } catch (error) {
    console.error(error.message);
  }
}

// DELETE DATA
const deleteRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await db.query(
      "DELETE FROM restaurants WHERE restaurant_id=$1 RETURNING *;", [id]
    );
    res.status(200).json({
      deletedRestaurant: results.rows[0]
    })
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