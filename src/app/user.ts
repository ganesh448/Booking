export class User {
  id!: number;
  name!: string;
  email!: string;
  phoneNo!: string;
  address!: string;
  password!: string;
  [key: string]: string | number;
}
