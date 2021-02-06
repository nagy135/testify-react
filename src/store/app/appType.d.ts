import { TOperationStatus } from "./../storeType.d";

export interface IAppState {
  user?: IUser;

  loginStatus?: TOperationStatus;
  loginError?: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}
