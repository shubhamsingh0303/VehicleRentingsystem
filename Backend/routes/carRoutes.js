const express = require('express');
const { createCar, updateCar, deleteCar, getAllCars, getSingleCar, Review } = require('../controllers/carController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/authentication');
const { singleUpload } = require('../middleware/multer');
const router = express.Router();

router.route("/create").post(singleUpload,isAuthenticatedUser, authorizeRoles("admin"), createCar);

router.route("/updateCar/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateCar);

router.route("/deleteCar/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCar);

router.route("/allCar").get(getAllCars);

// router.route('/review').put(isAuthenticatedUser,Review);

router.route("/getSingleCar/:id").get(getSingleCar);

module.exports = router;