import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useRequestErrorHandling } from '@app/axios/error/error-handling'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

interface IUseApi {
  baseApi: AxiosInstance
  post: <D = unknown, R = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>) => Promise<AxiosResponse<R>>
  get: <R = unknown>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<R>>
}

/**
 * Хук базовых API запросов с настройками по умолчанию
 * @return AxiosInstance
 */
export const useApi = (): IUseApi => {
  const { baseURL } = useSelector((state: RootState) => state.appConfig)
  const { baseErrorHandling } = useRequestErrorHandling();

  const baseApi: AxiosInstance = axios.create({
    baseURL: baseURL ?? '', // Базовый URL
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer <token>`,
    }
  });

  baseApi.interceptors.response.use(undefined, 
    (err: AxiosError) => {
      baseErrorHandling(err);
    })

  /**
   * POST запрос
   * @param url Эндпоинт
   * @param data Тело запроса
   * @param config Конфигурации запроса
   * @return Promise
   */
  const post = <D = unknown, R = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<R>> => {
    return baseApi.post(url, data, config)
  }

  /**
   * GET запрос
   * @param url Эндпоинт
   * @param config Конфигурации запроса
   * @return Promise
   */
  const get = <R = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> => {
    return baseApi.get(url, config)
  }

  return {
    baseApi,
    post,
    get
  }

} 
