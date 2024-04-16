export enum Locations {
  Birmingham = "Birmingham",
  Manchester = "Manchester",
  Leeds = "Leeds",
  London = "London",
}

export type Location = keyof typeof Locations;
export type Condition = "New" | "Used";
export type Status = "Open" | "Closed";

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
  location: Location;
  price: number;
  pictures: string[];
  condition: Condition;
  status: Status;
  profile: IProfile;
}
