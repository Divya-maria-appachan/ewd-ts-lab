export interface Friend {
  name: string;
  phone: string;
  dob? : Date;   // New
  age: number;
  interests? : string[]   // New
}
export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }
  export interface EmailContact {
    name: string;
    email: string
}
export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}
export interface FriendName {
  name: string;
}