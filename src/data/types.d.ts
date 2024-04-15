export enum Location {
  MCR = "Manchester",
  LDN = "London",
}

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
  dateTime: Date;
  title: string;
  description: string;
  location: Location;
  price: number;
  pictures: string[];
  condition: Condition;
  status: Status;
  profile: IProfile;
}
