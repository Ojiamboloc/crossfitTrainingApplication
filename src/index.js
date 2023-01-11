const express = require("express");
const bodyParser = require("body-parser");

//const v1Router = require("./v1/routes");
const v1WorkoutRouter=require ("./v1/routes/workoutRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

//for testing purposes
/*app.get("/", (req, res, next) =>{
    res.send("<h2>Working</h2>");
});*/
//app.use("/api/v1", v1Router);
app.use("/api/v1/workouts", v1WorkoutRouter);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
