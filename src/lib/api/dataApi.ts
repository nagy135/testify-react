import { AxiosPromise } from "axios";
import BaseApi from "./baseApi";

export interface ICustomRequestParams {
  method: "GET" | "POST" | "PUT" | "DELETE";
  data: object;
  queries: { [key: string]: string | number | null | undefined };
  contentType: "application/json" | "multipart/form-data";
}

class DataApi extends BaseApi {
  // Custom Get request
  custom = <T = any>(
    path: string,
    params: Partial<ICustomRequestParams> | null = null
  ): AxiosPromise<T> => {
    if (params === null) {
      return this.axios.get(`${this.baseUrl}${path}`);
    }

    if (params.method === "POST") {
      return this.axios.post(`${this.baseUrl}${path}`, params.data, {
        headers: {
          "Content-Type":
            params && params.contentType
              ? params.contentType
              : "application/json",
        },
        params: {
          ...params.queries,
        },
      });
    }

    if (params.method === "PUT") {
      return this.axios.put(`${this.baseUrl}${path}`, params.data, {
        headers: {
          "Content-Type":
            params && params.contentType
              ? params.contentType
              : "application/json",
        },
        params: {
          ...params.queries,
        },
      });
    }

    if (params.method === "DELETE") {
      return this.axios.delete(`${this.baseUrl}${path}`, {
        params: {
          ...params.queries,
        },
      });
    }

    // default
    return this.axios.get(`${this.baseUrl}${path}`, {
      params: {
        ...params.queries,
      },
    });
  };
}

export default new DataApi();
