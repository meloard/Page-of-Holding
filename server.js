const path = require("path");
const express = require("express");
const router = require("express").Router();

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));
});
