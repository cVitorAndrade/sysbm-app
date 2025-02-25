import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from '../../repositories/BookRepository';

interface DeleteBookIdRequest {
  bookId: string;
}

@Injectable()
export class DeleteBookByIdUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute({ bookId }: DeleteBookIdRequest) {
    const book = await this.bookRepository.findById(bookId);
    if (!book) throw new NotFoundException();

    book.status = 'disabled';
    this.bookRepository.update(book);
  }
}
