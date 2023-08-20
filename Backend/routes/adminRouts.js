const express = require("express");
const {updateRole, getAllUser, getSingleUser, deleteUser } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authentication");
const { updateCarStatus } = require("../controllers/carController");
const router = express.Router();

router.route("/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router.route("/user/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateRole)
        .get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser)
        .delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser);


router.route("/updateCarStatus/:id").post(isAuthenticatedUser,authorizeRoles("admin"),updateCarStatus)

module.exports =   router;