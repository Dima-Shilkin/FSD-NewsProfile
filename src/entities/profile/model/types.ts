import { Status } from "@/shared/interfaces";

export interface User {
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
  }
}

export interface Profile {
    profileData: User,
    statusLoading: Status,
    statusError: string
}