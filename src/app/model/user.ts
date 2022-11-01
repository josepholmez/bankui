export class User {
  username: string;
  firstName: string;
  lastName: string;
  email: string | null;
  userType: UserType;
  passwordHash: string;
}

export enum UserType {
  APPLICATION = 'Application',
  ADMIN = 'Admin',
  REGULAR = 'Regular',
}
