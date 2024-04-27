const express = require('express');
const router = express.Router();
const store = require('store2');
const path = require('path');
const petsArray = require('../../data/pets');
const usersArray = require('../../data/users');


let pageName = 'Pets';

//Api routes /pets
router
.route('/')
.get((req, res, next) => {
	console.log('IM IN GET of pets');
	res.render('pages/createPet.ejs', { pageName: pageName});
});

router
	.route('/:id')
	.get((req, res, next) => {
		
	})

router.route('/api')
.get((req, res, next) => {
    res.send(petsArray)
})
.post((req, res) => { //for API testing  see body example below
    console.log("IM IN PET POST")

	let userId = req.body.userId || ""
	let name = req.body.name;
	let typeOfPet = req.body.typeOfPet;
	let breed = req.body.breed || "I don't know";
	let sex = req.body.sex;
	let age = req.body.age || "I don't know";
	let size = req.body.size || "I don't know";
	let food = req.body.needsFood ? true : false;
	let walks = req.body.needsWalks ? true : false;
	let medication = req.body.needsMedication ? true : false;
	let picture = req.file?.path ? req.file.path : path.resolve(__dirname, '../../public/images/default.jpeg')

	if (name && typeOfPet && breed && sex && age && size) {

		let id = (petsArray.length == 0 ? petsArray.length + 1 : petsArray.length - 1) + 1;
		let minInfo = { id: id, type: typeOfPet, name: name};
		let petInfo = { id: id,  name: name, type: typeOfPet, breed: breed, sex: sex, age: age, size: size, food: food, walks: walks, medication: medication, picture: picture};
		
		store.set('minPetInfo', minInfo);
		store.set('petInfo', petInfo);
		
		if (typeof userId == 'number'){
			let user = usersArray.find(oneUser => {
				if (oneUser._id == userId) {
					if (oneUser.pet){
						oneUser.pet.push(minInfo);
					} else {
						oneUser.pet = [minInfo]
					}
					petInfo.parents = {id: oneUser._id, name: `${oneUser.firstName} ${oneUser.lastName}`, phone: oneUser.phone}
					store.set('petAdded', true)
					console.log("Pet added to user succesfully")
			}else {
				console.log(error(404, "User not found"))
			}
		})
		}
		res.redirect('/success');
        // res.json({id: petInfo.id, status: 201}).status(201)
	} else {
		res.json({ error: 'Not enough information' });
	}
});

module.exports = router;

//POST EXAMPLE /api:
// {
//	   "userId": 1
//     "name": "Osito",
//     "typeOfPet": "Dog",
//     "breed": "Poodle/Maltese",
//     "sex": "M",
//     "age": "7",
//     "size": "small boy",
//     "needsFood": true,
//     "needsWalks": true,
//     "needsMedication": false
//   }