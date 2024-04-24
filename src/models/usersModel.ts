import {IAddress} from './addressModel'
import {PetType} from './petsModel'

  interface IPetInUser {
    id: number;
    type: PetType;
    name: string;
  }
  
  interface IVetInfo {
    vet: string;
    address: string;
    website: string;
    phone: string;
  }
  
  interface IEmergencyContact {
    name: string;
    relation: string;
    phone: string;
  }
  
  type PaymentMethod = "Cash" | "Card" | "Venmo" | "Zelle"

  interface IPayment {
    amount: number;
    days: number;
    date: string;
  }
  type contactPreferences = 'Phone Call' | 'Text Message' | 'WhatsApp' | "Email";
  interface IUser {
    _id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    contactPreference: contactPreferences;
    houseInstructions: string;
    address: IAddress;
    pets: IPetInUser[];
    vetInfo: IVetInfo;
    emergencyContact: IEmergencyContact;
    paymentMethod: PaymentMethod;
     _baseRate: number;
    _lastVisit: Date;
    _payments: IPayment[];
    _notes: string;
  }
    //@ts-ignore
  class UserClass implements IUser {
    constructor(
      public _id: number = 1,
      public firstName: string,
      public lastName: string,
      public phone: string,
      public email: string,
      public contactPreference: contactPreferences,
      public houseInstructions: string = 'N/A',
      public address: IAddress =  {id: 1, type: 'Parents House',street: '123 Fake St',city: 'Denver',state: 'CO',zip: '80216',country: 'USA'},
      public pets: IPetInUser[],
      public vetInfo: IVetInfo = { vet: 'Fake Vet',address: 'Somewhere',website: 'http://example.com',phone: '987-654-3210'},
      public emergencyContact: IEmergencyContact = {name: 'Emergency Friend',relation: 'Friend',phone: '456-123-7890'
    },
      public paymentMethod: PaymentMethod = "Cash",
      //@ts-ignore
      protected _baseRate: number = 0,
        //@ts-ignore
      protected _lastVisit: Date = new Date("1/1/1999"),
        //@ts-ignore
      protected _payments: IPayment[] = [{amount: 150,days: 3,date: '03/20/2024'}],
        //@ts-ignore
      protected _notes: string = 'N/A'
    ) {}
  }