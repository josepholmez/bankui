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
  accountType: AccountType.CHECKING_CAD;
}