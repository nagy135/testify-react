import { AxiosRequestConfig } from "axios";

export interface ICustomRequestParams extends Omit<AxiosRequestConfig, "url"> {
  contentType?: "application/json" | "multipart/form-data";
}
