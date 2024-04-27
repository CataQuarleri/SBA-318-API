const express = require('express');
const router = express.Router();
const store = require('store2');
const error = require('../middlewares/errorHandling.js');


const usersArray = require('../../data/users');
const petsArray = require('../../data/pets');

//Regex
let phonePattern = /^[0-9]+$/; //I need the phone as a string 
let emailPattern = /^[^@]+@[^@]+.[^@]+$/;

//Api routes /users/api
router
	.route('/')
	.get((req, res, next) => {
		//if userID in req.query
		if (req.query['lastName'] && req.query['firstName']){
			usersArray.find(oneUser => {
				if (req.query['lastName'].toLowerCase() == oneUser.lastName.toLowerCase()){
					if (req.query['firstName'].toLowerCase() == oneUser.firstName.toLowerCase()){
						res.json(oneUser)
					}
				}
			})
		}
		res.json(usersArray);
	})
	.post((req, res, next) => {
		try{
		let firstName = req.body.firstName;
		let lastName = req.body.lastName;
		let phone = req.body.phone;
		// if (phone.match(phonePattern)) {
		// 	next(error(400, "Bad request, phone has to be only numbers"))
		// }
		let email = req.body.email;
		// if (email.match(emailPattern)){
		// 	next(error(400, "Bad request, email has to be a valid format"))
		// }
		let contactPreferences = req.body.contactPreferences;
		console.log("ALL DATA", firstName, lastName, phone, email, contactPreferences)
		let _id = usersArray.length  + 1;
		let data;
		if (firstName && lastName && phone && email && contactPreferences) {
			 data = {
				_id: _id,
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				email: email,
				contactPreferences: contactPreferences
			};
			store.set('contactInfo', data);
			store.set('minUserInfo', {id: _id, name: `${firstName} ${lastName}`, phone: phone})
			usersArray.push(data)
			res.json({contactInfo: "saved", _id: _id, status: 201, user: data})
		} else {
			next(error(400, "Bad request"))
		}
	}catch (e){
		console.log("ERROR in post", e)
	}
	})

	router
		.route('/:id')
		.get((req, res, next) => {
			const user = usersArray.find((oneUser, i) => {
				if (oneUser._id == req.params.id) {
					return oneUser
				}
			});
			if (user) {
				return res.json(user);
			} else {
				next(error(404, "User not found"));
			}
		})
		.patch((req, res) => {
		const user = usersArray.find((oneUser, i) => {
			if (oneUser._id == req.params.id) {
				for (const key in req.body) {
					usersArray[i][key] = req.body[key];
				}
				return true;
			}
		});
		if (user) {
			return res.json(user);
		} else {
			next(error(404, "User not found"));
		}
	})
	.delete( (req, res) => {
		const user = usersArray.find((oneUser, i) => {
			if (oneUser._id == req.params.id) {
				usersArray.splice(i, 1);
				return true;
			}
		});
		if (user) {
			return res.json({delete: "success", user: user.id}).status(200);
		} else {
			next(error(404, "User not found"));
		}
		
	});

	router
	.route('/:id/addPet/:petId')
	.get( (req, res, next) => {	
			const user = usersArray.find((oneUser) => {
				if (oneUser._id == req.params.id) {
					if (oneUser.pet){
						oneUser.pet.find((onePet)=>{
							if(onePet.id === req.params.petId){
								res.json(onePet)
							}else {
						next(error(404, "Pet not found"))
							}
						})
					} else {
						next(error(404, "User does not have pets yet"))
					}
				}else {
					next(error(404, "User not found"))
				}
			});
		
	})
	.put( (req, res, next) => {
		console.log('im in')
		let petData;
		const pet = petsArray.find((onepet) => {
			if (onepet.id == req.params.petId) {
				petData = onepet;
				return true
			}
		});
		if (pet){
			const user = usersArray.find((oneUser, i) => {
				if (oneUser._id == req.params.id) {
					if (oneUser.pet){
						oneUser.pet.push(petData);
					} else {
						oneUser.pet = [petData]
					}
					res.json(oneUser)
				}else {
					next(error(404, "User not found"))
				}
			});
		} else {
			next(error(404, "Pet not found"))
		}
	})
	

module.exports = router;


// { "firstName": "Mr.",
// "lastName": "Plow",
// "phone": "5554796",
// "email": "mrplow@gmail.com",
// "contactPreferences": "Phone Call"
// }
// { "firstName": "Lisa",
// "lastName": "Simpson",
// "phone": "333-4567",
// "email": "eatgreens@gmail.com",
// "contactPreferences": "Text Message"
// }

// "pets": {
// "id": 2,
// "type": "Dog",
// "name": "Osito"
// }