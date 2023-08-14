const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');


//Connect to DB
db.connect();


//SCSS & Static files
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources' , 'views'));

//Route init
route(app);


app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
})