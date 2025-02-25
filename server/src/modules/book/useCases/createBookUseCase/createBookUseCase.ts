import { Injectable } from '@nestjs/common';
import { BookRepository } from '../../repositories/BookRepository';
import { Book } from '../../entities/book';

interface CreateBookRequest {
  registrationNumber: string;
  author: string;
  volume: string;
  shelfId: string;
  bookShelfId: string;
  publicationYear: string;
  notes: string | null;
  publisher: string;
  copies: string;
  acquisitionMethod: string;
  title: string;
  librarianId: string;
  genre: string;
  language: string;
  available: string;
  isbn: string;
  numberOfPages: string;
}

@Injectable()
export class CreateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(createBookRequest: CreateBookRequest) {
    const book = new Book(createBookRequest);
    await this.bookRepository.create(book);
    return book;
  }
}
