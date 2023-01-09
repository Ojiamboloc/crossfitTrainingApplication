const express =require("express");
const app =express();

const PORT=process.env.PORT || 3000;

//for testing purposes
app.get("/", (req, res, next) =>{
    res.send("<h2>Working</h2>");
});
app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`);});
