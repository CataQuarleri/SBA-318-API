const PetClass = require('../models/petsModel')
const petsArray = require('../../data/pets')
const {createNewUser} = require('./createNewUser')
const store = require('store2')
console.log("ARRAY OF PETS", petsArray)
 async function createNewPet(){
    try{
    let getPetInfo = store.get('petInfo')
    let petData = getPetInfo;
    let picture = "";
    let minPetInfo = store.get('minPetInfo')
    let minUserInfo = store.get('minUserInfo')
    console.log("PET DATA", getPetInfo)
    let values = [];
    for (const key in petData) {
        let value = petData[key];
        if (typeof value === 'object' || Array.isArray(value)) {
            let spreadedValue = {...value}
            values.push(spreadedValue);
        } else {
            values.push(value);
        }
    }
    values.push(minUserInfo)
    values.push(picture)
    console.log("PET PET VALUES", values)
    let newPet = await new PetClass.PetClass(...values)
    petsArray.push(newPet)
    createNewUser(minPetInfo)
    return true
}catch(e){
    console.log("ERROR IN createNewPet", e)
}
}

module.exports = {createNewPet}