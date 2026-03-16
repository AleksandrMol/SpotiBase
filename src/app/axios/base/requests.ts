import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosBase from "./axios-base";

export const get = <T,>(endpoint: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return axiosBase.get(endpoint, config);
};

export const post = <T,>(endpoint: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return axiosBase.post(endpoint, data, config);
};
