const express = require('express');
const router = express.Router();
const {exampleUser} = require('../models/usersModel.js')
const {generateFormInputs, inputs} = require('../utilities/generateFormInputs.js')

router 
    .route('/')
    .get((req, res, next) => {
            console.log("IM IN GET of users")
            // console.log("EXAMPLE", exampleUser)
            generateFormInputs(exampleUser)
            res.render('pages/createUser.ejs', {inputs: inputs})
    })
    .post((req, res, next) => {
        if(req.status === 200){
            console.log("SOMETHING")
        }else {
            next()
        }
    })

module.exports = router;