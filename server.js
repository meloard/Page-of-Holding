const path = require("path");
const express = require("express");
const router = require("express").Router();
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const app = express();
const { engine } = require("express-handlebars");

app.use(express.static("public"));

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", {
    title: "PageofHolding",
    style: "home.css",
  });
});

app.get("/userLogin", (req, res) => {
  res.render("userLogin", {
    title: "User Login",
    style: "user.css",
  });
});

const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
