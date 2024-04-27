"use strict";
exports.__esModule = true;
var PetClass = (function () {
    function PetClass(_id, name, typeOfPet, breed, sex, age, size, needsFood, needsWalks, needsMedication, parents, picture) {
        if (breed === void 0) { breed = 'N/A'; }
        if (picture === void 0) { picture = ''; }
        this._id = _id;
        this.name = name;
        this.typeOfPet = typeOfPet;
        this.breed = breed;
        this.sex = sex;
        this.age = age;
        this.size = size;
        this.needsFood = needsFood;
        this.needsWalks = needsWalks;
        this.needsMedication = needsMedication;
        this.parents = parents;
        this.picture = picture;
    }
    return PetClass;
}());
var newPet = new PetClass(1, 'Osito', 'Dog', 'Poodle/Maltese', 'M', '7', 'small boy', false, true, false, { id: 1, name: 'Catalina Quarleri', phone: '3036412156' }, '');
console.log("NEW PET", newPet);
module.exports = { PetClass: PetClass };
//# sourceMappingURL=petsModel.js.map