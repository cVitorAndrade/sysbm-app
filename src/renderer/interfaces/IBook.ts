export interface ICreateBook {
  registrationNumber: string;
  author: string;
  volume: string;
  shelfId: string;
  bookShelfId: string;
  publicationYear: string;
  notes: string | null;
  publisher: string;
  copies: string;
  acquisitionMethod: string;
  title: string;
  genre: string;
  language: string;
  available: string;
  isbn: string;
  numberOfPages: string;
}

export interface IBook extends ICreateBook {
  id: string;
  createdAt: Date;
}
