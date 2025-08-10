export interface IUser {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Geolocation {
  lat: string;
  long: string;
}
