const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');



const app = express();
const PORT = process.env.PORT || 3030;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
