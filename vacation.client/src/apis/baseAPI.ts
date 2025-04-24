import { AxiosRequestConfig } from 'axios';
import { apiClient, buildHeadersForBlob } from './apiClient';

const doGet = async <TResponse>(endPoint: string, params?: unknown): Promise<TResponse> => {
  const config: AxiosRequestConfig = {
    params,
  };

  const response = await apiClient.get<TResponse>(endPoint, config);

  return response.data;
};

const doPost = async <TResponse, TData = unknown>(
  endPoint: string,
  data: TData
): Promise<TResponse> => {
  const response = await apiClient.post<TResponse>(endPoint, data);
  return response.data;
};

const doPut = async <TResponse, TData = unknown>(
  endPoint: string,
  data: TData
): Promise<TResponse> => {
  const response = await apiClient.put<TResponse>(endPoint, data);
  return response.data;
};

const doDelete = async <TResponse>(endPoint: string, params: unknown): Promise<TResponse> => {
  const config: AxiosRequestConfig = {
    params,
  };

  const response = await apiClient.delete<TResponse>(endPoint, config);
  return response.data;
};

const doGetFile = async (endPoint: string): Promise<Blob> => {
  const config: AxiosRequestConfig = {
    responseType: 'blob',
    headers: buildHeadersForBlob(),
  };

  const response = await apiClient.get(endPoint, config);
  return response.data;
};

export { doGet, doPost, doPut, doDelete, doGetFile };
