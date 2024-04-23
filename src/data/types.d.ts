import { locationData } from '@/data/location';

export type Country = keyof typeof locationData;
export type City = (typeof locationData)[Country]['cities'][number];
export type Currency = (typeof locationData)[Country]['currency'];
export type NumberFormat = (typeof locationData)[Country]['numberFormat'];
export type Condition = 'New' | 'Used';
export type Status = 'Open' | 'Closed';
export type LocalePrice = number; // e.g. 1000 = £10 or EUR, 1000 = €10.

export interface IProfile {
  firstName: string;
  lastName: string;
  telephone?: string;
  email: string;
}

export interface IListing {
  id: string;
  dateTime: string;
  title: string;
  description: string;
  country: Country;
  city: City;
  price: LocalePrice;
  pictures: string[];
  condition: Condition;
  status: Status;
  profile: IProfile;
}
