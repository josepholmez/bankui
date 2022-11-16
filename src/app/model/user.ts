export class User {
  id: number;
  deleted: boolean;

  username: string;
  firstName: string;
  lastName: string;
  email: string | null;
  userType: UserType.REGULAR;
  passwordHash: string;
  customerId: number | null;
}

export enum UserType {
  APPLICATION = 'Application',
  ADMIN = 'Admin',
  REGULAR = 'Regular',
}
