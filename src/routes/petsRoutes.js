const express = require('express');
const router = express.Router();
const store = require('store2');
const petsArray = require('../../data/pets');
const {createNewPet} = require('../utilities/createNewPet.js')

let pageName = 'Pets';

router.route('/').get((req, res, next) => {
	let hasNeedsInfo = true;
	console.log('IM IN GET of pets');
	res.render('pages/createPet.ejs', { pageName: pageName, hasNeedsInfo: hasNeedsInfo });
});

router.route('/api')
.get((req, res, next) => {
    res.send(petsArray)
})
.post((req, res) => { //for API testing  see body example below
    console.log("IM IN PET POST")
	let name = req.body.name;
	let typeOfPet = req.body.typeOfPet;
	let breed = req.body.breed || "I don't know";
	let sex = req.body.sex;
	let age = req.body.age || "I don't know";
	let size = req.body.size || "I don't know";
	let food = req.body.needsFood ? true : false;
	let walks = req.body.needsWalks ? true : false;
	let medication = req.body.needsMedication ? true : false;
    console.log("each info", name, typeOfPet, breed, sex, age, food, walks, medication)
	if (name && typeOfPet && breed && sex && age && size) {
		let id = (petsArray.length == 0 ? petsArray.length + 1 : petsArray.length - 1) + 1;
		let minInfo = { id: id, type: typeOfPet, name: name};
		let petInfo = { id: id,  name: name, type: typeOfPet, breed: breed, sex: sex, age: age, size: size, food: food, walks: walks, medication: medication};
		store.set('minPetInfo', minInfo);
		store.set('petInfo', petInfo);
        console.log("pet info in routes",store.get('petInfo'))
        createNewPet()
        res.json({id: petInfo.id, status: 201}).status(201)
		res.redirect('/success');
	} else {
		res.json({ error: 'Not enough information' });
	}
});

module.exports = router;

//POST EXAMPLE /api:
// {
//     "_id": 1,
//     "name": "Osito",
//     "typeOfPet": "Dog",
//     "breed": "Poodle/Maltese",
//     "sex": "M",
//     "age": "7",
//     "size": "small boy",
//     "needsFood": false,
//     "needsWalks": true,
//     "needsMedication": false,
//     "parents": { "id": 1, "name": "Marge Simpson", "phone": "1234567890" },
//     "picture": ""
//   }