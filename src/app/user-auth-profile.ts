import { User } from './user';

export interface UserAuthProfile {
  token: string;
  refreshToken: string;
  user: User;
}
