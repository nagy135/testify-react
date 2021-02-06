import dataApi from "@lib/api/dataApi";

/**
 * Call BE api to login user
 * @param email email of user
 * @param password password of user
 */
export function login(email: string, password: string) {
  return dataApi.custom("/api/login", {
    method: "POST",
    data: {
      email,
      password,
    },
  });
}
