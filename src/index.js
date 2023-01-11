const express = require("express");
const bodyParser = require("body-parser");
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
//const v1Router = require("./v1/routes");
const v1WorkoutRouter=require ("./v1/routes/workoutRoutes");
const app = express();
const cache = apicache.middleware;
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cache("2 minutes"));

//for testing purposes
/*app.get("/", (req, res, next) =>{
    res.send("<h2>Working</h2>");
});*/
//app.use("/api/v1", v1Router);
app.use("/api/v1/workouts", v1WorkoutRouter);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
