import { AxiosPromise } from "axios";
import { ICustomRequestParams } from "./api";
import BaseApi from "./baseApi";

class DataApi extends BaseApi {
  /**
   * Custom wrapper around axios to provide better
   * calls separations and to add auth tokens to headers
   * @param url url of api without baseUrl
   * @param config Config for request
   */
  request = <T = any>(
    url: string,
    config?: ICustomRequestParams
  ): AxiosPromise<T> => {
    return this.axios({
      url,
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type":
          config && config.contentType
            ? config.contentType
            : "application/json",
      },
    });
  };
}

export default new DataApi();
