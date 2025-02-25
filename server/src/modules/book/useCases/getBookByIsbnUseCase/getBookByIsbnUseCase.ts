import { Injectable } from '@nestjs/common';
import { BookRepository } from '../../repositories/BookRepository';

interface GetBookByIsbnRequest {
  isbn: string;
}

@Injectable()
export class GetBookByIsbnUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute({ isbn }: GetBookByIsbnRequest) {
    const book = await this.bookRepository.findByIsbn(isbn);
    return book;
  }
}
