"use strict";
exports.__esModule = true;
exports.exampleUser = exports.UserClass = void 0;
var IAddress = require('./addressModel').IAddress;
var PetType = require('./petsModel').PetType;
var UserClass = (function () {
    function UserClass(_id, firstName, lastName, phone, email, contactPreference, houseInstructions, address, pets, vetInfo, emergencyContact, paymentMethod, _baseRate, _lastVisit, _payments, _notes) {
        if (_id === void 0) { _id = 1; }
        if (houseInstructions === void 0) { houseInstructions = 'N/A'; }
        if (address === void 0) { address = { id: 1, type: 'Parents House', street: '123 Fake St', city: 'Denver', state: 'CO', zip: '80216', country: 'USA' }; }
        if (vetInfo === void 0) { vetInfo = { vet: 'Fake Vet', address: 'Somewhere', website: 'http://example.com', phone: '987-654-3210' }; }
        if (emergencyContact === void 0) { emergencyContact = { name: 'Emergency Friend', relation: 'Friend', phone: '456-123-7890'
        }; }
        if (paymentMethod === void 0) { paymentMethod = "Cash"; }
        if (_baseRate === void 0) { _baseRate = 0; }
        if (_lastVisit === void 0) { _lastVisit = new Date("1/1/1999"); }
        if (_payments === void 0) { _payments = [{ amount: 150, days: 3, date: '03/20/2024' }]; }
        if (_notes === void 0) { _notes = 'N/A'; }
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.contactPreference = contactPreference;
        this.houseInstructions = houseInstructions;
        this.address = address;
        this.pets = pets;
        this.vetInfo = vetInfo;
        this.emergencyContact = emergencyContact;
        this.paymentMethod = paymentMethod;
        this._baseRate = _baseRate;
        this._lastVisit = _lastVisit;
        this._payments = _payments;
        this._notes = _notes;
    }
    return UserClass;
}());
exports.UserClass = UserClass;
exports.exampleUser = new UserClass(2, "Susan", "Miller", "303-123-4567", "susan@greyhounds.com", "Phone Call", undefined, { id: 2, type: "Parents House", street: "1230 Newport St", city: "Denver", state: "CO", zip: "80216", country: "USA" }, [{ id: 2, type: "Dog", name: "Singer" }, { id: 3, type: "Dog", name: "Hank" }], undefined, undefined, "Venmo", 110, undefined);
console.log("USER IN MODEL", exports.exampleUser.firstName);
//# sourceMappingURL=usersModel.js.map