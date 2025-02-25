import {
  Book as BookRaw,
  Loan as LoanRaw,
  Reader as ReaderRaw,
} from '@prisma/client';
import { Loan } from 'src/modules/loan/entities/loan';
import { LoanWithDetails } from 'src/modules/loan/entities/LoanWithDetails';

export class PrismaLoanMapper {
  static toPrisma({
    bookConditionDelivery,
    bookConditionReturn,
    bookId,
    createdAt,
    finalDate,
    id,
    librarianId,
    observation,
    readerId,
    receivedById,
    returnDate,
    status,
    timesRenewed,
  }: Loan): LoanRaw {
    return {
      bookConditionDelivery,
      bookConditionReturn,
      bookId,
      createdAt,
      finalDate,
      id,
      librarianId,
      observation,
      readerId,
      receivedById,
      returnDate,
      status,
      timesRenewed,
    };
  }

  static toDomain({
    id,
    bookConditionDelivery,
    bookConditionReturn,
    bookId,
    createdAt,
    finalDate,
    librarianId,
    observation,
    readerId,
    receivedById,
    returnDate,
    status,
    timesRenewed,
  }: LoanRaw): Loan {
    return new Loan(
      {
        bookConditionDelivery,
        bookConditionReturn,
        bookId,
        createdAt,
        finalDate,
        librarianId,
        observation,
        readerId,
        receivedById,
        returnDate,
        status,
        timesRenewed,
      },
      id,
    );
  }

  static toDomainWithDetails(
    loanRaw: LoanRaw,
    book: BookRaw,
    reader: ReaderRaw,
  ): LoanWithDetails {
    const loan = this.toDomain(loanRaw);
    return new LoanWithDetails(loan, book, reader);
  }
}
