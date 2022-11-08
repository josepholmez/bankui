import { Customer } from './customer';
import { AccountType } from './accountType';
export class Account {
  id: number;
  deleted: boolean;

  history: string[];

  accountNumber: number;
  accountName: string | null;
  openedOn: Date;
  closedOn: Date | null;
  balance: number;
  customer: Customer;
  accountType: AccountType.CHECKING_CAD;
}
