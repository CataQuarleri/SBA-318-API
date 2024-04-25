const express = require('express');
const router = express.Router();

router 
    .route('/')
    .get((req, res, next) => {
        console.log("IM IN GET of pets")
        res.render('pages/createPet.ejs')

    })

module.exports = router;