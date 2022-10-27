import { Account } from './account';

export interface Customer {
  id: number;
  deleted: boolean;

  customerNumber: number;

  firstName: string;
  lastName: string;
  email: string | null;
  address: string | null;
  accounts: Account[];
}
