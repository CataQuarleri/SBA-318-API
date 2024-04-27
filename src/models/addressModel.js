"use strict";
exports.__esModule = true;
var Address = (function () {
    function Address(id, typeOfAddress, street, city, state, zip, country) {
        if (id === void 0) { id = 1; }
        if (typeOfAddress === void 0) { typeOfAddress = 'Parents House'; }
        if (street === void 0) { street = ''; }
        if (city === void 0) { city = ''; }
        if (state === void 0) { state = ''; }
        if (zip === void 0) { zip = ''; }
        if (country === void 0) { country = ''; }
        this.id = id;
        this.typeOfAddress = typeOfAddress;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
    return Address;
}());
//# sourceMappingURL=addressModel.js.map