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
    const { data } = await Api.patch<ILoanWithDetails>(
      `loans/complete/${id}`,
      payload,
    );
    return data;
  },

  async renewLoan(id: string) {
    const { data } = await Api.patch<ILoanWithDetails>(`loans/renew/${id}`);
    return data;
  },

  // eslint-disable-next-line no-dupe-keys
  async getLoansBetweenDates(
    startDate: string,
    endDate: string,
    dateField: string,
  ) {
    const { data } = await Api.get<ILoanWithDetails[]>(
      `/loans?startDate=${startDate}&endDate=${endDate}&dateField=${dateField}`,
    );
    return data;
  },

};
