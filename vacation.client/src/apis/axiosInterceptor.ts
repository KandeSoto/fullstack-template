// src/api/axiosInterceptor.ts
import { AxiosInstance } from 'axios';
import { LoadingContextType } from '@src/context/loading/types';

const INTERCEPTORS_ATTACHED_KEY = Symbol('interceptors_attached');

export const attachInterceptors = (
  axiosInstance: AxiosInstance & { [INTERCEPTORS_ATTACHED_KEY]?: boolean },
  loading: LoadingContextType
) => {
  // Ya se agregaron -> evitar duplicados
  if (axiosInstance[INTERCEPTORS_ATTACHED_KEY]) return;

  // Marcar como adjuntado
  axiosInstance[INTERCEPTORS_ATTACHED_KEY] = true;

  axiosInstance.interceptors.request.use(
    config => {
      loading.showLoading?.();
      return config;
    },
    error => {
      loading.hideLoading?.();
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    response => {
      loading.hideLoading?.();
      return response;
    },
    error => {
      loading.hideLoading?.();
      return Promise.reject(error);
    }
  );
};
