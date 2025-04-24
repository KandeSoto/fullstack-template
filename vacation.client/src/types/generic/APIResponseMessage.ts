export interface APIResponseMessage<T> {
  message?: string;
  error?: string;
  data: T;
}
