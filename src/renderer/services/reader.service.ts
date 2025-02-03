import { ICreateReader, IReader } from '../interfaces/IReader';
import { Api } from '../provider';

export const ReaderService = {
  async createReader(payload: ICreateReader) {
    const { data } = await Api.post<IReader>('/reader', payload);
    return data;
  },
};
