import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from '../../repositories/BookRepository';

interface UpdateBookRequest {
  acquisitionMethod?: string;
  author?: string;
  bookShelfId?: string;
  genre?: string;
  bookId?: string;
  isbn?: string;
  language?: string;
  notes?: string;
  numberOfPages?: string;
  publicationYear?: string;
  publisher?: string;
  registrationNumber?: string;
  shelfId?: string;
  title?: string;
  volume?: string;
}

@Injectable()
export class UpdateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute({
    acquisitionMethod,
    author,
    bookShelfId,
    genre,
    bookId,
    isbn,
    language,
    notes,
    numberOfPages,
    publicationYear,
    publisher,
    registrationNumber,
    shelfId,
    title,
    volume,
  }: UpdateBookRequest) {
    const book = await this.bookRepository.findById(bookId);
    console.log({ bookId });
    console.log({ book });
    if (!book) throw new Error();

    book.acquisitionMethod = acquisitionMethod ?? book.acquisitionMethod;
    book.author = author ?? book.author;
    book.bookShelfId = bookShelfId ?? book.bookShelfId;
    book.genre = genre ?? book.genre;
    book.isbn = isbn ?? book.isbn;
    book.language = language ?? book.language;
    book.notes = notes ?? book.notes;
    book.numberOfPages = numberOfPages ?? book.numberOfPages;
    book.publicationYear = publicationYear ?? book.publicationYear;
    book.publisher = publisher ?? book.publisher;
    book.registrationNumber = registrationNumber ?? book.registrationNumber;
    book.shelfId = shelfId ?? book.shelfId;
    book.title = title ?? book.title;
    book.volume = volume ?? book.volume;

    await this.bookRepository.update(book);
    return book;
  }
}
