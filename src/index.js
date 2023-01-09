const express = require("express");

const v1Router = require("./v1/routes");
const app = express();
const PORT = process.env.PORT || 3000;

//for testing purposes
/*app.get("/", (req, res, next) =>{
    res.send("<h2>Working</h2>");
});*/
app.use("/api/v1", v1Router);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
