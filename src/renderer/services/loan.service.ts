import {
  ICreateLoan,
  ILoan,
  ILoanWithDetails,
  IMarkLoanAsComplete,
} from '../interfaces/ILoan';
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

  async getLoanById(id: string) {
    const { data } = await Api.get<ILoan>(`/loans/${id}`);
    return data;
  },

  async markLoanAsComplete(id: string, payload: IMarkLoanAsComplete) {
    const { data } = await Api.patch(`loans/complete/${id}`, payload);
    return data;
  },
};
