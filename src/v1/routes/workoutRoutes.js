const express = require("express");
const workoutController=require("../../controllers/workoutController");
const router = express.Router();
const recordController = require("../../controllers/recordController");
const apicache = require("apicache");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const cache = apicache.middleware;
const authenticate = require("../../middlewares/authenticate");
const authorize = require("../../middlewares/authorize");

router.post("/", authenticate, authorize, workoutController.createNewWorkout);
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);
router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId/records", recordController.getRecordForWorkout);
router.get("/:workoutId", workoutController.getOneWorkout);
router.post("/", workoutController.createNewWorkout);
router.patch("/:workoutId", workoutController.updateOneWorkout);
router.delete("/:workoutId",workoutController.deleteOneWorkout);
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);
module.exports =router;