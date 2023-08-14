const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');




//Helper functions
const { currencyFormat } = require('./resources/hbs-helpers/helper');



//Connect to DB
db.connect();


const app = express();
const port = 3000;


//SCSS & Static files
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));


//Template engine
app.engine(
  'hbs',
  handlebars.engine({
    //layout directory
    layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    //partials directory
    partialsDir: path.join(__dirname,'resources', 'views', 'partials'),
    extname: '.hbs',
    helpers: {
      format: (value) => currencyFormat(value),
      add: (value) => add(value)
    }
  }));



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));



//Route init
route(app);


app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
})