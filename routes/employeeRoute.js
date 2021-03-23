//imports
const express = require('express');
const multer = require('multer');

//instantiating router from express
const router = express.Router();

///get employee
router.get('/createEmployee', (req, res) => { 
    res.render('createEmployee', {title: 'Employee'});
});


//post employee
router.post('/createEmploye', (req, res) => {
    console.log(req.body);
});

//image upload 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

var upload = multer({storage: storage})

router.post('/createEmployee', upload.single('imageupload'), (req,res) => {
    try {
        console.log(req.file)
    }
    catch(err) {
        res.send(400);
    }
})


//exports
module.exports = router;