import { cityData, countryData, currencyData } from '@/data/location';

export type City = keyof typeof cityData;
export type Country = (typeof countryData)[Locale]['name'];
export type Locale = keyof typeof countryData;

export type CurrencyCode = keyof typeof currencyData;
export type CurrencySymbol = (typeof currencyData)[CurrencyCode]['symbol'];

export type Condition = 'New' | 'Used';
export type Status = 'Open' | 'Closed';
export type LocalePrice = number; // e.g. 1000 = £10 or EUR, 1000 = €10.
export interface IProfile {
  firstName: string;
  lastName: string;
  telephone?: string;
  email: string;
  city: City;
}

export interface IListing {
  id: string;
  dateTime: string;
  title: string;
  description: string;
  city: City;
  country: Country;
  price: LocalePrice;
  locale: Locale;
  currency: CurrencyCode;
  pictures: string[];
  condition: Condition;
  status: Status;
  profile: IProfile;
}
