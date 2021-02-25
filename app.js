const express = require('express');
const todoController=require('./controllers/todoControllers')

const app = express();

//port
const port = 3000;

// template engine
app.set('view engine', 'ejs');

// statics
app.use(express.static('./public'));

//fire controllers
todoController(app)

//listen to a port
app.listen(port);
console.log("you are listening port " + port);