export interface Account {
  id: number;
  deleted: boolean;

  history: string[];

  accountNumber: number;
  accountName: string | null;
  openedOn: Date;
  closedOn: Date | null;
  balance: number;
}
