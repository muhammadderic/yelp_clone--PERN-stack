const express = require("express");
const router = express.Router();
const {
  createRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant
} = require("../controllers/restaurantController");

// CREATE DATA
router.post("/add", createRestaurant);

// GET ALL DATA
router.get("/", getAllRestaurants);

// GET SINGLE DATA
router.get("/:id", getRestaurant);

// UPDATE DATA
router.put("/:id", updateRestaurant);

// DELETE DATA
router.delete("/:id", deleteRestaurant);

module.exports = router;