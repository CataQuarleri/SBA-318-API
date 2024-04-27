const express = require('express');
const router = express.Router();
const store = require('store2');

const usersArray = require('../../data/users');
const addressesArray = require('../../data/address');

//Regex
let phonePattern = '^[0-9]+$'; //I need the phone as a string so I use pattern instead of type number in input
let emailPattern = '^[^@]+@[^@]+.[^@]+$';

//Api routes
router
	.route('/api')
	.get((req, res, next) => {
		res.json(usersArray);
	})
	.post('/contactInfo', (req, res) => {
		let firstName = req.body.firstName;
		let lastName = req.body.lastName;
		let phone = req.body.phone;
		if (phone.match(phonePattern)) {
			next(error(400, "Bad request, phone has to be only numbers"))
		}
		let email = req.body.email;
		if (email.match(emailPattern)){
			next(error(400, "Bad request, email has to be a valid format"))

		}
		let contactPreferences = req.body.contactPreferences;
		let _id = (usersArray.length == 0 ? usersArray.length : usersArray.length - 1) + 1;
		if (firstName && lastName && phone && email && contactPreferences) {
			let data = {
				_id: _id,
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				email: email,
				contactPreferences: contactPreferences
			};
			store.set('contactInfo', data);
			store.set('minUserInfo', {id: _id, name: `${firstName} ${lastName}`, phone: phone})
		}
		res.json({contactInfo: "saved", _id: _id, status: 201, user: data})
	})
	
	

module.exports = router;


// "firstName": "Catalina",
// "lastName": "Quarleri",
// "phone": "3036412156",
// "email": "cataquarleri@gmail.com",
// "contactPreference": "Text Messages",
// "service": "Overnight Care",
// "nextDates": {
// "startingDate": "2024-04-09",
// "endDate": "2024-05-01"
// },
// "address": {
// "id": 0,
// "typeOfAddress": "Parents House",
// "street": "43 Sherman St #301",
// "city": "Denver",
// "state": "CO",
// "zip": "80203",
// "country": "United States"
// },
// "pets": {
// "id": 2,
// "type": "Dog",
// "name": "Osito"
// }