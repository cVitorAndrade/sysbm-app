import { Loan } from 'src/modules/loan/entities/loan';

export class LoanViewModel {
  static toHttp({
    id,
    librarianId,
    readerId,
    bookId,
    createdAt,
    bookConditionDelivery,
    finalDate,
    bookConditionReturn,
    observation,
    receivedById,
    returnDate,
    status,
    timesRenewed,
  }: Loan) {
    return {
      id,
      librarianId,
      readerId,
      bookId,
      createdAt,
      bookConditionDelivery,
      finalDate,
      bookConditionReturn,
      observation,
      receivedById,
      returnDate,
      status,
      timesRenewed,
    };
  }
}
