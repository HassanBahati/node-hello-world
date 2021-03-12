// console.log('Hello, World, Node is working');

//importing the express library/framework
const express = require('express');

//instantiating express in constant app
const app = express();

//home route
app.get('/', (req, res) => { 
    // res.send('Homepage! Hello World.');
    res.sendFile(__dirname + '/index.html')
});

//about route
app.get('/about', (req, res) => {
    res.send('About page. Nice')
});

//server to run at port 3000
app.listen(3804, () => console.log('listening on port 3804'));

/**
 * when user visits browser at http://localhost:3804/ 
 * --browser conducts a READ operation by sending a GET request to the server 
 * --server receives a GET request and handles itt using the express get() method
 * --this express get() method  has 2 arguments , app.get(path/endpoint, callback function)
 * --the first arugement which is the path/end point appears after the domain name for this case its '/'
 * -- then the second argument is a call back function whith 2 arguments (req,res), 
 * --it use   s the res object to send a response back to the browser , it does this by send() method res.send()
 * For Callbacks --we are usign ES^ arrow functions instead of the older way of writing functions  
 */