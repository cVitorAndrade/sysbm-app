import { IBookshelf, ICreateBookshelf } from '../interfaces/IBookshelf';
import { Api } from '../provider';

export const BookshelfService = {
  async createBookshelf(payload: ICreateBookshelf) {
    const { data } = await Api.post<IBookshelf>('/bookshelf', payload);
    return data;
  },

  async getAllBookshelf() {
    const { data } = await Api.get<IBookshelf[]>('/bookshelf');
    return data;
  },
};
