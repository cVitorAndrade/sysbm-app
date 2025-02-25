import { Book, Reader } from '@prisma/client';
import { Loan } from './loan';

export class LoanWithDetails {
  constructor(
    public loan: Loan,
    public book: Book,
    public reader: Reader,
  ) {}
}
