import { IBookshelf, ICreateBookshelf } from '../interfaces/IBookshelf';
import { Api } from '../provider';

export const BookshelfService = {
  async createBookshelf(payload: ICreateBookshelf) {
    const { data } = await Api.post<IBookshelf>('/bookshelf', payload);
    return data;
  },
};
