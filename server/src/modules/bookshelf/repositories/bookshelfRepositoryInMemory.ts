import { Bookshelf } from '../entities/bookshelf';
import { BookshelfRepository } from './bookshelfRepository';

export class BookshelfRepositoryInMemory implements BookshelfRepository {
  bookshelfs: Bookshelf[] = [];
  async create(bookshelf: Bookshelf): Promise<void> {
    this.bookshelfs.push(bookshelf);
  }

  async findById(id: string): Promise<Bookshelf | null> {
    const bookshelf = this.bookshelfs.find((bookshelf) => bookshelf.id === id);
    if (!bookshelf) return null;

    return bookshelf;
  }

  async getAll(): Promise<Bookshelf[]> {
    throw new Error('Method not implemented.');
  }
}
