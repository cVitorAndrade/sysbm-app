import { Injectable } from '@nestjs/common';
import { BookRepository } from '../../repositories/BookRepository';

@Injectable()
export class GetAllBooksUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute() {
    const books = await this.bookRepository.getAll();
    return books;
  }
}
