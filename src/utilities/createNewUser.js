const UserClass = require('../models/usersModel')
const usersArray = require('../../data/users')
const store = require('store2')

 function createNewUser(minPetInfo = {noinfo: 'no info'}){
    let getUserContact = store.get('contactInfo')
    let getAdditionalInfo = store.get('addInfo')
    let userData = {...getUserContact, ...getAdditionalInfo?.addInfo, minPetInfo}
    console.log("USER DATA", userData)
let values = [];
for (const key in userData) {
    let value = userData[key];
    if (typeof value === 'object' || Array.isArray(value)) {
        let spreadedValue = {...value}
        values.push(spreadedValue);
    } else {
        values.push(value);
    }
}
    console.log("VALUES IN USER", values)
    let newUser = new UserClass.UserClass(...values)

    usersArray.push(newUser)
    return true
}

module.exports = {createNewUser}

// ALUES IN USER [
//     1,
//     'Catalina',
//     'Quarleri',
//     '3036412156',
//     'cataquarleri@gmail.com',
//     'Text Messages',
//     'Day Care',
//     { startingDate: '2024-04-11', endDate: 'No end date' },
//     {
//       id: 0,
//       typeOfAddress: 'Parents House',
//       street: '43 Sherman St #301',
//       city: 'Denver',
//       state: 'CO',
//       zip: '80203',
//       country: 'United States'
//     },
//     { id: 2, type: 'Dog', name: 'Osito' }
//   ]
// // USER DATA {
// //     _id: 20,
// //     firstName: 'Catalina',
// //     lastName: 'Quarleri',
// //     phone: '3036412156',
// //     email: 'cataquarleri@gmail.com',
// //     contactPreferences: 'Text Messages',
// //     service: 'Overnight Care',
// //     nextDates: { startingDate: '2024-04-09', endDate: 'No end date' },
// //     address: {
// //       id: 1,
// //       typeOfAddress: 'DayCare',
// //       street: '11405 ebony st',
// //       city: 'firestone',
// //       state: 'Colorado',
// //       zip: '80504',
// //       country: 'Mexico'
// //     },
// //     minPetInfo: { noinfo: 'no info' }
// //   }

// const store = require('store2');

// function createNewPet() {
//     try {
//         console.log("IM IN createNewPet");
//         let getPetInfo = store.get('petInfo');
//         let minPetInfo = store.get('minPetInfo');
//         console.log("PET DATA", getPetInfo);
//         return true;
//     } catch (e) {
//         console.log("ERROR IN createNewPet", e);
//         return false;
//     }
// }

// function createNewUser(minPetInfo = { noinfo: 'no info' }) {
//     try {
//         let getUserContact = store.get('contactInfo');
//         let getAdditionalInfo = store.get('addInfo');
//         let userData = { ...getUserContact, ...getAdditionalInfo?.addInfo, minPetInfo };
//         console.log("USER DATA", userData);
//         let values = [];
//         for (const key in userData) {
//             let value = userData[key];
//             if (typeof value === 'object' || Array.isArray(value)) {
//                 let spreadedValue = {...value}
//                 values.push(spreadedValue);
//             } else {
//                 values.push(value);
//             }
//         }
//         console.log("VALUES IN USER", values);
//         return true;
//     } catch (e) {
//         console.log("ERROR IN createNewUser", e);
//         return false;
//     }
// }

// module.exports = { createNewPet, createNewUser };