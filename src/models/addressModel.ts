type typeOfAddress = "Parents House" | "DayCare" | "Friend or relative" 

export interface IAddress {
    id: number;
    typeOfAddress: typeOfAddress,
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }

 class Address implements IAddress {
    constructor(
        public id: number = 1,
        public typeOfAddress: typeOfAddress = 'Parents House',
        public street: string = '',
        public city: string = '',
        public state: string = '',
        public zip: string = '',
        public country: string = ''
      ) {}
 }