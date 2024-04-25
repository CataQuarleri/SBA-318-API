const express = require('express');
const router = express.Router();
const store = require('store2');

const users = require('../../data/users');

let phonePattern = '^[0-9]+$';
let emailPattern = '^[^@]+@[^@]+.[^@]+$';


// let hasContactInfo = store.get('hasContactInfo');

router
	.route('/quote')
	.get((req, res, next) => {
		let hasContactInfo = store.get('hasContactInfo');
		if (!hasContactInfo?.hasContactInfo) {
			res.render('pages/createUser.ejs', {
				hasContactInfo: hasContactInfo,
				pageName: 'Get a Quote',
				phonePattern: phonePattern,
				emailPattern: emailPattern
			});
		} else {
			res.redirect('/users/addInfo');
		}
	})
	.post((req, res) => {
		let body = req.body;
		let firstName = req.body.firstName;
		let lastName = req.body.lastName;
		let phone = req.body.phone;
		let email = req.body.email;
		let contactPreferences = req.body.contactPreferences;
		console.log('SOMETHING', body);
		if (firstName && lastName && phone && email && contactPreferences) {
			let data = {
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				email: email,
				contactPreferences: contactPreferences
			};
			store.set('contactInfo', data);
			store.set('hasContactInfo', {hasContactInfo: true});
		}
		res.redirect('/users/addinfo');
	});



router
	.route('/addinfo')
	.get((req, res, next) => {
		let contactInfo = store.get("hasContactInfo")
		console.log("HAS", contactInfo)
		res.render('pages/createUser.ejs', {
			hasContactInfo: contactInfo.hasContactInfo,
			pageName: 'Get a Quote',
			phonePattern: phonePattern,
			emailPattern: emailPattern
		});
});

router
	.route('/api/postdata')
	.get((req, res, next) => {
		res.json(users);
	})
	.post((req, res) => {
		let service = req.body.service;
		let startingDate = req.body.startingDate;
		let endDate = req.body.endDate || "No end date";
		let street = req.body.street;
		let city = req.body.city;
		let state = req.body.state;
		let zip = req.body.zip;
		let country = req.body.country;
		let typeOfAddress = req.body.type;
		if(service && startingDate && endDate && street && city && state && zip && country && typeOfAddress) {
			let address = {street, city, state, zip, country, typeOfAddress}
			let addInfo = {service, nextDates: {startingDate, endDate}, address}
			console.log("ADD INFO", addInfo)
			res.redirect('/pets');
		}else {
			res.json({error: "Not enough information"})
		}
	});
module.exports = router;
