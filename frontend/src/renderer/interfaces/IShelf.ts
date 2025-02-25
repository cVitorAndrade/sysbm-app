export interface ICreateShelf {
  number: string;
  letter: string;
  bookShelfId: string;
}

export interface IShelf extends ICreateShelf {
  id: string;
}
