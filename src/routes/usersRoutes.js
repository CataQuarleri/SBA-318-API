const express = require('express');
const router = express.Router();

const users = require('../../data/users');

let phonePattern = '^[0-9]+$';
let emailPattern = '^[^@]+@[^@]+.[^@]+$';

let hasContactInfo = false;

router
	.route('/quote')
	.get((req, res, next) => {
		if (!hasContactInfo) {
			res.render('pages/createUser.ejs', {
				hasContactInfo: hasContactInfo,
				pageName: 'Get a Quote',
				phonePattern: phonePattern,
				emailPattern: emailPattern
			});
		} else {
			res.redirect('/addInfo');
		}
	})
	.post((req, res) => {
		let body = req.body;
		console.log('SOMETHING', body);
		console.log('STATUS', res);
		res.redirect('/users/addinfo');
	});

router.route('/addinfo').get((req, res, next) => {
	hasContactInfo = true;
	res.render('pages/createUser.ejs', {
		hasContactInfo: hasContactInfo,
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
		let body = req.body;
		console.log('SOMETHING', body);
		console.log('STAtus in addinfo che', res);
		res.redirect('/pets');
		// if (req.status === 201) {
		// }
	});
module.exports = router;
