import { UserType } from './user';
import { Account } from './account';

export class Customer {
  id: number;
  deleted: boolean;

  cusNumber: number;
  firstName: string;
  lastName: string;
  email: string | null;
  address: string | null;
  userType: UserType;
  password: string;
  accounts: Account[];
}
