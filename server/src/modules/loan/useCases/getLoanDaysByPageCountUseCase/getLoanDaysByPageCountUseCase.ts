import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from 'src/modules/book/repositories/BookRepository';

interface GetLoanDaysByPageCountRequest {
  bookId: string;
}

@Injectable()
export class GetLoanDaysByPageCountUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute({ bookId }: GetLoanDaysByPageCountRequest) {
    const book = await this.bookRepository.findById(bookId);
    if (!book) throw new NotFoundException();

    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found.`);
    }

    return this.calculateLoanDays(Number(book.numberOfPages));
  }

  private calculateLoanDays(numberOfPages: number): number {
    return numberOfPages <= 300 ? 15 : 30;
  }
}
