export type PetType = 'Dog' | 'Cat' | 'Bird' | 'Chicken' | 'Farm Animal' | 'Serpent/Reptile' | 'Frogs/Amphibian' | 'Rodent' | 'Other'

interface IPetBehavior {
  specialNeeds: string;
  routine: string;
  trainingRouting: string;
  fears: string;
  notes: string;
}

interface IMedicationInfo {
  typeOfMedication: string;
  amount: string;
  time: string;
  details: string;
}

interface IAllergies {
  hasAllergies: boolean;
  typeOfAllergy: string;
  careInstructions: string;
  additionalInfo: string;
}

interface IVaccine {
  date: Date;
  typeOfVaccine: string;
}

interface IMeal {
  meal: number;
  amount: number;
  typeOfFood: string;
  brand: string;
}

interface IPet {
  _id: number;
  name: string;
  parents: { id: number; name: string; phone: string };
  typeOfPet: PetType;
  breed: string;
  sex: string;
  age: string;
  microchipped: boolean;
  picture: string;
  behavior: IPetBehavior;
  health: {
    isMedicated: boolean;
    medicationInfo: IMedicationInfo[];
  };
  allergies: IAllergies;
  weightInPounds: number;
  size: string;
  needs: string;
  lastVetVisit: Date;
  vaccines: IVaccine[];
  food: {
    frequency: number;
    foodAllergies: string;
    restrictions: string;
    notes: string;
    meals: IMeal[];
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

class PetClass implements IPet {
  constructor(
    public _id: number,
    public name: string,
    public parents: { id: number; name: string; phone: string },
    public typeOfPet: PetType,
    public breed: string = 'N/A',
    public sex: string,
    public age: string,
    public microchipped: boolean = false,
    public picture: string,
    public behavior: IPetBehavior = {
      specialNeeds: 'N/A',
      routine: 'N/A',
      trainingRouting: 'N/A',
      fears: 'N/A',
      notes: 'N/A',
    },
    public health: {
      isMedicated: boolean;
      medicationInfo: IMedicationInfo[];
    } = {
      isMedicated: false,
      medicationInfo: [{ typeOfMedication: 'N/A', amount: '0', time: 'N/A', details: 'N/A' }],
    },
    public allergies: IAllergies = { hasAllergies: false, typeOfAllergy: 'N/A', careInstructions: 'N/A', additionalInfo: 'N/A' },
    public weightInPounds: number,
    public size: string,
    public needs: string = 'none',
    public lastVetVisit: Date = new Date('1/1/1999'),
    public vaccines: IVaccine[] = [
      { date: new Date('1/1/1999'), typeOfVaccine: 'rabies' },
      { date: new Date('1/1/1999'), typeOfVaccine: 'DA2PP' },
    ],
    public food: {
      frequency: number;
      foodAllergies: string;
      restrictions: string;
      notes: string;
      meals: IMeal[];
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
}