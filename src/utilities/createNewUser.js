const User = require('../models/usersModel')
const usersArray = require('../../data/users')
const store = require('store2')

export function createNewUser(user){
    
    let newUser = new User()

    usersArray.push(newUser)
}