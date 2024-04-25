"use strict";
exports.__esModule = true;
var PetClass = (function () {
    function PetClass(_id, name, parents, typeOfPet, breed, sex, age, microchipped, picture, behavior, health, allergies, weightInPounds, size, needs, lastVetVisit, vaccines, food, treats, walks, toys, relevantInformation) {
        if (breed === void 0) { breed = 'N/A'; }
        if (microchipped === void 0) { microchipped = false; }
        if (behavior === void 0) { behavior = {
            specialNeeds: 'N/A',
            routine: 'N/A',
            trainingRouting: 'N/A',
            fears: 'N/A',
            notes: 'N/A'
        }; }
        if (health === void 0) { health = {
            isMedicated: false,
            medicationInfo: [{ typeOfMedication: 'N/A', amount: '0', time: 'N/A', details: 'N/A' }]
        }; }
        if (allergies === void 0) { allergies = { hasAllergies: false, typeOfAllergy: 'N/A', careInstructions: 'N/A', additionalInfo: 'N/A' }; }
        if (needs === void 0) { needs = 'none'; }
        if (lastVetVisit === void 0) { lastVetVisit = new Date('1/1/1999'); }
        if (vaccines === void 0) { vaccines = [
            { date: new Date('1/1/1999'), typeOfVaccine: 'rabies' },
            { date: new Date('1/1/1999'), typeOfVaccine: 'DA2PP' },
        ]; }
        this._id = _id;
        this.name = name;
        this.parents = parents;
        this.typeOfPet = typeOfPet;
        this.breed = breed;
        this.sex = sex;
        this.age = age;
        this.microchipped = microchipped;
        this.picture = picture;
        this.behavior = behavior;
        this.health = health;
        this.allergies = allergies;
        this.weightInPounds = weightInPounds;
        this.size = size;
        this.needs = needs;
        this.lastVetVisit = lastVetVisit;
        this.vaccines = vaccines;
        this.food = food;
        this.treats = treats;
        this.walks = walks;
        this.toys = toys;
        this.relevantInformation = relevantInformation;
    }
    return PetClass;
}());
//# sourceMappingURL=petsModel.js.map