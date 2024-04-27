"use strict";
exports.__esModule = true;
exports.exampleUser = exports.UserClass = void 0;
var IAddress = require('./addressModel').IAddress;
var PetType = require('./petsModel').PetType;
var UserClass = (function () {
    function UserClass(_id, firstName, lastName, phone, email, contactPreference, service, nextDates, address, pets) {
        if (_id === void 0) { _id = 1; }
        if (nextDates === void 0) { nextDates = { startingDate: new Date("01/01/199"), endDate: new Date("01/01/1999") }; }
        if (address === void 0) { address = { id: 1, typeofAddress: 'Parents House', street: '123 Fake St', city: 'Denver', state: 'CO', zip: '80216', country: 'USA' }; }
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.contactPreference = contactPreference;
        this.service = service;
        this.nextDates = nextDates;
        this.address = address;
        this.pets = pets;
    }
    return UserClass;
}());
exports.UserClass = UserClass;
exports.exampleUser = new UserClass(2, "Susan", "Miller", "303-123-4567", "susan@greyhounds.com", "Phone Call", "Planning a trip", undefined, { id: 2, type: "Parents House", street: "1230 Newport St", city: "Denver", state: "CO", zip: "80216", country: "USA" }, [{ id: 2, type: "Dog", name: "Singer" }, { id: 3, type: "Dog", name: "Hank" }]);
module.exports = { UserClass: UserClass };
//# sourceMappingURL=usersModel.js.map