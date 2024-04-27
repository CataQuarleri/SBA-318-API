const express = require('express');
const router = express.Router();
const addressArray = require('../../data/address');
router 
    .route('/')
    .get((req, res, next) => {
       res.json(addressArray)
    })
    .post((req, res) => {
        let userID = "";
		let street = req.body.street;
		let city = req.body.city;
		let state = req.body.state;
		let zip = req.body.zip;
		let country = req.body.country;
		let typeOfAddress = req.body.type;
		if(service && startingDate && endDate && street && city && state && zip && country && typeOfAddress) {
			let id = (addressArray.length -1) + 1;
			let address = {id: id, typeOfAddress, street, city, state, zip, country}
			let addInfo = {service, nextDates: {startingDate, endDate}, address}
			console.log("ADD INFO", addInfo)
			store.set('addInfo', {addInfo: addInfo})
			store.set('address', {address: address})	
			res.json({addInfo: addInfo, address: address})
		}else {
			res.json({error: "Not enough information"})
		}
	})

module.exports = router;

// {
// "id": 0,
// "typeOfAddress": "Parents House",
// "street": "43 Sherman St #301",
// "city": "Denver",
// "state": "CO",
// "zip": "80203",
// "country": "United States"
// }