export const locations = {
  Birmingham: "Birmingham",
  Manchester: "Manchester",
  Leeds: "Leeds",
  London: "London",
} as const;

export type Location = (typeof locations)[keyof typeof locations];
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
