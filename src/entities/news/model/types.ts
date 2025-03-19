import { Status } from "@/shared/interfaces";

export interface Post {
  title: string;
  body: string;
  id: number;
}

export interface NewsState {
    newsData: Post[],
    statusLoading: Status,
    statusError: string
}