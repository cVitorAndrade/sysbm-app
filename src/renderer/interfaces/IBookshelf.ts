export interface ICreateBookshelf {
  name: string;
  color: string;
  description?: string;
}

export interface IBookshelf extends ICreateBookshelf {
  id: string;
  createdAt: string;
}
