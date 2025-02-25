import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoanRepository } from '../../repositories/LoanRepository';
import { Loan } from '../../entities/loan';
import { BookRepository } from 'src/modules/book/repositories/BookRepository';

interface CreateLoanRequest {
  readerId: string;
  librarianId: string;
  bookId: string;
  bookConditionDelivery: string;
  finalDate: Date;
  observation: string | null;
}

@Injectable()
export class CreateLoanUseCase {
  constructor(
    private loanRepository: LoanRepository,
    private bookRepository: BookRepository,
  ) {}

  async execute(createLoanRequest: CreateLoanRequest) {
    const book = await this.bookRepository.findById(createLoanRequest.bookId);
    if (!book) throw new NotFoundException();

    const hasAvailableCopies = Number(book.available) > 0;
    if (!hasAvailableCopies) throw new UnauthorizedException();

    book.available = `${Number(book.available) - 1}`;
    await this.bookRepository.update(book);

    const loan = new Loan(createLoanRequest);
    await this.loanRepository.create(loan);
    return loan;
  }
}
