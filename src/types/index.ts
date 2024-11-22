export interface User {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}

export interface ITag {
  id: string;
  name: string;
  count: number;
}

export interface Response<T> {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: T[];
}
