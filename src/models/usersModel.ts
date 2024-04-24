interface Address {
    id: number;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
  
  interface Pet {
    id: number;
    type: string;
    name: string;
  }
  
  interface VetInfo {
    vet: string;
    address: string;
    website: string;
    phone: string;
  }
  
  interface EmergencyContact {
    name: string;
    relation: string;
    phone: string;
  }
  
  interface Payment {
    amount: number;
    days: number;
    date: string;
  }
  
  interface User {
    _id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    contactPreference: string;
    houseInstructions: string;
    address: Address;
    pets: Pet[];
    vetInfo: VetInfo;
    emergencyContact: EmergencyContact;
    paymentMethod: string;
    _baseRate: number;
    _lastVisit: string;
    _payments: Payment[];
    _notes: string;
  }
  
  class UserClass implements User {
    constructor(
      public _id: number,
      public firstName: string,
      public lastName: string,
      public phone: string,
      public email: string,
      public contactPreference: string,
      public houseInstructions: string,
      public address: Address,
      public pets: Pet[],
      public vetInfo: VetInfo,
      public emergencyContact: EmergencyContact,
      public paymentMethod: string,
      public _baseRate: number,
      public _lastVisit: string,
      public _payments: Payment[],
      public _notes: string
    ) {}
  }