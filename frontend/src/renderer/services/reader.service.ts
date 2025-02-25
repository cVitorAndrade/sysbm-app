import { ICreateReader, IReader, IUpdateReader } from '../interfaces/IReader';
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

  async deleteReaderById(id: string) {
    await Api.delete<IReader>(`/reader/${id}`);
  },

  async update(id: string, payload: IUpdateReader) {
    await Api.patch(`/reader/${id}`, payload);
  },
};
