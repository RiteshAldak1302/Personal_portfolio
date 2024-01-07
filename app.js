const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const ejsMate = require('ejs-mate');

// use ejs-locals for all ejs templates:
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"/public")));
app.engine("ejs" , ejsMate);  

app.get("/" , (req, res)=>{
    res.render("content/index.ejs");
})

app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
});