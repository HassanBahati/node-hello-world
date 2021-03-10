// console.log('Hello, World, Node is working');

//importing the express library
const express = require('express');

//instantiating express in constant app
const app = express();

//server to run at port 3000
app.listen(3000, () => console.log('listening on port 3000'));