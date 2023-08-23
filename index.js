// require
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// set/use

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// route

app.get("/todolist", (req, res) => {
    // Base homes
    res.render("index.ejs");
})


app.listen(3000, () => {
    console.log("ON PORT: 3000");
})


