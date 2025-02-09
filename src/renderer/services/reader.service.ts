import { ICreateReader, IReader } from '../interfaces/IReader';
import { Api } from '../provider';

export const ReaderService = {
  async createReader(payload: ICreateReader) {
    const { data } = await Api.post<IReader>('/reader', payload);
    return data;
  },

  async getReaderByCpf(cpf: string) {
    const { data } = await Api.get<IReader>(`/reader/cpf/${cpf}`);
    return data;
  },

  async getAllReaders() {
    const { data } = await Api.get<IReader[]>('/reader');
    return data;
  },
};
