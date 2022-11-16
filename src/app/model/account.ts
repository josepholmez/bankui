import { Customer } from './customer';
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

export enum AccountType {
  CHECKING_CAD = 'Checking-CAD',
  SAVING_CAD = 'Saving-CAD',
  CHECKING_USD = 'Checking-USD',
  SAVING_USD = 'Saving-USD',
}
