const express = require('express');

//instantiating router from express
const router = express.Router();

///create employee route
router.get('/createEmployee', (req, res) => { 
    res.render('createEmployee', {title: 'Employee'});
});

//exporting 
module.exports = router;