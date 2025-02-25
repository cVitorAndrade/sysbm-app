import { LoanWithDetails } from 'src/modules/loan/entities/LoanWithDetails';
import { LoanViewModel } from './loanViewModel';

export class LoanWithDetailsViewModel {
  static toHttp({ loan, book, reader }: LoanWithDetails) {
    return {
      ...LoanViewModel.toHttp(loan),
      bookTitle: book.title,
      readerName: reader.name,
      readerCpf: reader.cpf,
    };
  }
}
