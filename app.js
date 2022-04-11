const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const gameRoutes = require('./src/routes/game.route');

app.set('view engine','ejs');
app.set('views', path.resolve('src/views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.resolve('public')));

app.use(session({
    secret: "Mensaje Secreto",
    resave: true,
    saveUninitialized: true
  }
));
app.use('/',gameRoutes);


app.listen(process.env.PORT || 3060,()=> console.log("Corriendo aplicacion"));