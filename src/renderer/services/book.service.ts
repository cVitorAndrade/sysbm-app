import { IBook, ICreateBook } from '../interfaces/IBook';
import { Api } from '../provider';

export const BookService = {
  async createBook(payload: ICreateBook) {
    const { data } = await Api.post<IBook>('/book', payload);
    return data;
  },

  async getAllBooks() {
    const { data } = await Api.get<IBook[]>('/book');
    return data;
  },

  async getBookByIsbn(isbn: string) {
    const { data } = await Api.get<IBook>(`/book/isbn/${isbn}`);
    return data;
  },
};
