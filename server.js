const path = require("path");
const express = require("express");
const router = require("express").Router();
const sequelize = require('./controllers');


app.engine('handlebars', expbs())
app.set('view engine', 'handlebars');

//routing
app.get('/', (req, res) => {
  res.render('index');
});

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


  app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));

