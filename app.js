const express = require('express');

const app = express();

//port
const port = 3000;

//listen to a port
app.listen(port);
console.log("you are listening port " + port);