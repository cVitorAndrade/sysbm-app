import { ICreateShelf, IShelf } from '../interfaces/IShelf';
import { Api } from '../provider';

export const ShelfService = {
  async createShelf(payload: ICreateShelf) {
    const { data } = await Api.post<IShelf>('/shelf', payload);
    return data;
  },
};
