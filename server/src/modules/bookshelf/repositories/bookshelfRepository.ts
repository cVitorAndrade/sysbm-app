import { Bookshelf } from '../entities/bookshelf';

export abstract class BookshelfRepository {
  abstract create(bookshelf: Bookshelf): Promise<void>;
  abstract findById(id: string): Promise<Bookshelf | null>;
  abstract getAll(): Promise<Bookshelf[]>;
}
