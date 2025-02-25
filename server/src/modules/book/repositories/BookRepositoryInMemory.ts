import { Book } from '../entities/book';
import { BookRepository } from './BookRepository';

export class BookRepositoryInMemory implements BookRepository {
  books: Book[] = [];
  async create(book: Book): Promise<void> {
    this.books.push(book);
  }

  async getAll(): Promise<Book[]> {
    throw new Error('Not implemented');
  }

  async findById(id: string): Promise<Book | null> {
    throw new Error('Method not implemented.');
  }

  async findByIsbn(id: string): Promise<Book | null> {
    throw new Error('Method not implemented.');
  }

  async update(book: Book): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
