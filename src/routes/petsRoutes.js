const express = require('express');
const router = express.Router();
let pageName = "Pets"
router 
    .route('/')
    .get((req, res, next) => {
        let hasNeedsInfo = true
        console.log("IM IN GET of pets")
        res.render('pages/createPet.ejs', {pageName: pageName, hasNeedsInfo: hasNeedsInfo})
    })

module.exports = router;