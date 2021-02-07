import axios, { AxiosInstance } from "axios";

abstract class BaseApi {
  protected axios: AxiosInstance;
  protected baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

    const axiosInitData = {
      timeout: 0,
    };

    this.axios = axios.create(axiosInitData);
  }
}

export default BaseApi;
