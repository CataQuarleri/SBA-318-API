const express = require('express');
const router = express.Router();

router 
    .route('/')
    .get((req, res, next) => {
        console.log("IM IN GET of address")
    })

module.exports = router;