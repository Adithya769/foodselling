const express = require("express");
// const mysql = require("mysql2");

const app = express();
app.use(express.json());

const foodRoutes = require('./routes/foods');
const categoriesRoutes = require('./routes/categories')
app.use('/foods',foodRoutes);
app.use('/categories'/categoriesRoutes);

app.listen(8080);