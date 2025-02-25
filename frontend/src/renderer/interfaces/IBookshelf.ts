import { IShelf } from './IShelf';

export interface ICreateBookshelf {
  name: string;
  color: string;
  description?: string;
}

export interface IBookshelf extends ICreateBookshelf {
  id: string;
  createdAt: string;
}

export interface IBookshelfWithDetails extends IBookshelf {
  shelves: IShelf[];
}
