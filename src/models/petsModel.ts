interface PetBehavior {
  specialNeeds: string;
  routine: string;
  trainingRouting: string;
  fears: string;
  notes: string;
}

interface MedicationInfo {
  typeOfMedication: string;
  amount: string;
  time: string;
  details: string;
}

interface Allergies {
  hasAllergies: boolean;
  typeOfAllergy: string;
  careInstructions: string;
  additionalInfo: string;
}

interface Vaccine {
  date: Date;
  typeOfVaccine: string;
}

interface Meal {
  meal: number;
  amount: number;
  typeOfFood: string;
  brand: string;
}

interface Pet {
  _id: number;
  name: string;
  parents: { id: number; name: string; phone: string };
  typeOfPet: string;
  breed: string;
  sex: string;
  age: string;
  microchipped: boolean;
  picture: string;
  behavior: PetBehavior;
  health: {
    isMedicated: boolean;
    medicationInfo: MedicationInfo[];
  };
  allergies: Allergies;
  weightInPounds: number;
  size: string;
  needs: string;
  lastVetVisit: Date;
  vaccines: Vaccine[];
  food: {
    frequency: number;
    foodAllergies: string;
    restrictions: string;
    notes: string;
    meals: Meal[];
  };
  treats: {
    daily: boolean;
    type: {
      brand: string;
      type: string;
      amount: number | string;
    }[];
  };
  walks: {
    needs: boolean;
    amountDaily: number;
    distanceInMiles: number;
    timeInMinutes: number;
    route: string;
    preferences: string;
    habits: string;
    details: string;
  };
  toys: string[];
  relevantInformation: string;
}

class PetClass implements Pet {
  constructor(
    public _id: number,
    public name: string,
    public parents: { id: number; name: string; phone: string },
    public typeOfPet: string,
    public breed: string = 'N/A',
    public sex: string,
    public age: string,
    public microchipped: boolean = false,
    public picture: string,
    public behavior: PetBehavior = {
      specialNeeds: 'N/A',
      routine: 'N/A',
      trainingRouting: 'N/A',
      fears: 'N/A',
      notes: 'N/A',
    },
    public health: {
      isMedicated: boolean;
      medicationInfo: MedicationInfo[];
    } = {
      isMedicated: false,
      medicationInfo: [{ typeOfMedication: 'N/A', amount: '0', time: 'N/A', details: 'N/A' }],
    },
    public allergies: Allergies = { hasAllergies: false, typeOfAllergy: 'N/A', careInstructions: 'N/A', additionalInfo: 'N/A' },
    public weightInPounds: number,
    public size: string,
    public needs: string = 'none',
    public lastVetVisit: Date = new Date('1/1/1999'),
    public vaccines: Vaccine[] = [
      { date: new Date('1/1/1999'), typeOfVaccine: 'rabies' },
      { date: new Date('1/1/1999'), typeOfVaccine: 'DA2PP' },
    ],
    public food: {
      frequency: number;
      foodAllergies: string;
      restrictions: string;
      notes: string;
      meals: Meal[];
    },
    public treats: {
      daily: boolean;
      type: {
        brand: string;
        type: string;
        amount: number | string;
      }[];
    },
    public walks: {
      needs: boolean;
      amountDaily: number;
      distanceInMiles: number;
      timeInMinutes: number;
      route: string;
      preferences: string;
      habits: string;
      details: string;
    },
    public toys: string[],
    public relevantInformation: string
  ) {}
    // id: number;
    // type: string;
}