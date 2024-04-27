const express = require('express');
const router = express.Router();

router 
    .route('/')
    .get((req, res, next) => {
        console.log("IM IN GET of address")
    })
    .post((req, res) => {
		let street = req.body.street;
		let city = req.body.city;
		let state = req.body.state;
		let zip = req.body.zip;
		let country = req.body.country;
		let typeOfAddress = req.body.type;
		if(service && startingDate && endDate && street && city && state && zip && country && typeOfAddress) {
			let id = (addressesArray.length -1) + 1;
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