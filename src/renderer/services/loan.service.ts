import { ICreateLoan, ILoan, ILoanWithDetails } from '../interfaces/ILoan';
import { Api } from '../provider';

export const LoanService = {
  async createLoan(payload: ICreateLoan) {
    const { data } = await Api.post<ILoan>('/loans', payload);
    return data;
  },

  async getAllLoans() {
    const { data } = await Api.get<ILoanWithDetails[]>('/loans');
    return data;
  },
};
