const express = require('express');
const router = express.Router();
const error = require('../middlewares/errorHandling')
const addressArray = require('../../data/address');

// API /address/api
router 
    .route('/')
    .get((req, res, next) => {
		console.log(addressArray)
       res.json(addressArray)
    })
    .post((req, res) => {
        let userId = req.body.userId || "";
		let street = req.body.street;
		let city = req.body.city;
		let state = req.body.state;
		let zip = req.body.zip;
		let country = req.body.country;
		let typeOfAddress = req.body.type;
		if( street && city && state && zip && country && typeOfAddress) {
			let id = addressArray.length  + 1;
			let address = {id: id, typeOfAddress, street, city, state, zip, country}
			console.log("ADD INFO", addInfo)
			store.set('addInfo', {addInfo: addInfo})
			store.set('address', {address: address})	
			res.json({addInfo: addInfo, address: address})
			if (typeof userId == 'number'){
				let user = usersArray.find(oneUser => {
					if (oneUser._id == userId) {
						if (oneUser.address){
							oneUser.address.push(address);
						} else {
							oneUser.address = [address]
						}
						address.user = {id: oneUser._id, name: `${oneUser.firstName} ${oneUser.lastName}`, phone: oneUser.phone}
						console.log("Address added to user succesfully")
				}else {
					console.log(error(404, "User not found"))
				}
			})
			}
		}else {
			res.json({error: "Not enough information"})
		}
	})
	
// API /address/api/:id
	router
		.route('/:id')
		.get((req, res, next) => {
			const address = addressArray.find((oneaddress) => {
				if (oneaddress.id == req.params.id) {
					return oneaddress
				}
			});
			if (address) {
				return res.json(address);
			} else {
				next(error(404, "address not found"));
			}
		})
		//ADD A USER'S INFO TO ADDRESS address/api/:id?userId=<userId>
		.put( (req, res, next) => {
			if(req.query["userId"]){
			let userData;
			const user = usersArray.find((oneuser) => {
				if (oneuser._id == req.query["userId"]) {
					userData = {id: oneuser._id, name: `${oneuser.firstName} ${oneuser.lastName}`, phone: oneuser.phone};
					return true
				}
			});
			if (user){
				const address = addressArray.find((oneaddress, i) => {
					if (oneaddress.id == req.params.id) {
						if (oneaddress.user){
							oneaddress.user.push(userData);
						} else {
							oneaddress.user = [userData]
						}
						res.json(oneaddress)
					}else {
						next(error(404, "address not found"))
					}
				});
			} else {
				next(error(404, "user not found"))
			}
		}
		})
		.patch((req, res) => {
		const address = addressArray.find((oneaddress, i) => {
			if (oneaddress.id == req.params.id) {
				for (const key in req.body) {
					addressArray[i][key] = req.body[key];
				}
				return true;
			}
		});
		if (address) {
			return res.json(address);
		} else {
			next(error(404, "address not found"));
		}
	})
	.delete( (req, res) => {
		const address = addressArray.find((oneaddress, i) => {
			if (oneaddress.id == req.params.id) {
				addressArray.splice(i, 1);
				return true;
			}
		});
		if (address) {
			return res.json({delete: "success", address: address.id}).status(200);
		} else {
			next(error(404, "address not found"));
		}
		
	});

module.exports = router;

// {
// "typeOfAddress": "Parents House",
// "street": "123 Fake Street",
// "city": "Springfield",
// "state": "New Sodom",
// "zip": "192005",
// "country": "USA"
// }