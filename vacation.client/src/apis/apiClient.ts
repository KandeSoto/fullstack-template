import axios from 'axios';

export const buildHeadersWithOutToken = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export const buildHeadersForBlob = () => ({
  Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
});

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: buildHeadersWithOutToken(),
});
