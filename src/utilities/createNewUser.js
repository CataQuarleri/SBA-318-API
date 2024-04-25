const User = require('../models/usersModel')
const usersArray = require('../../data/users')
const store = require('store2')

 function createNewUser(){
    let getUserContact = store.get('contactInfo')
    let getAdditionalInfo = store.get('addInfo')
    let userData = {...getUserContact, ...getAdditionalInfo?.addInfo}
    console.log("USER DATA", userData)
    // let newUser = new User()

    // usersArray.push(newUser)
    return true
}

module.exports = {createNewUser}