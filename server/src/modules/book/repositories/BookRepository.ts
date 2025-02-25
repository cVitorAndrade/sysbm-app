import { Book } from '../entities/book';

export abstract class BookRepository {
  abstract create(book: Book): Promise<void>;
  abstract getAll(): Promise<Book[]>;
  abstract findById(id: string): Promise<Book | null>;
  abstract findByIsbn(isbn: string): Promise<Book | null>;
  abstract update(book: Book): Promise<void>;
}
