import { ICreateLoan, ILoan } from '../interfaces/ILoan';
import { Api } from '../provider';

export const LoanService = {
  async createLoan(payload: ICreateLoan) {
    const { data } = await Api.post<ILoan>('/loan', payload);
    return data;
  },
};
