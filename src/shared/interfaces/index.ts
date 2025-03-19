export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  IDLE = 'idle'
}

export interface ComponentWithClassName {
  className: string;
}

export interface FormData {
  [key: string]: string;
}