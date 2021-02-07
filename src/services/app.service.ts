import { IUser } from "./../store/app/appType.d";
import DataApi from "../lib/api";

/**
 * Call BE api to login user
 * @param email email of user
 * @param password password of user
 */
export function login(email: string, password: string) {
  return DataApi.request<IUser>("/api/login", {
    method: "POST",
    data: {
      email,
      password,
    },
  });
}
