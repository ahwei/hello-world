export interface User {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}

export interface Response<T> {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: T[];
}
