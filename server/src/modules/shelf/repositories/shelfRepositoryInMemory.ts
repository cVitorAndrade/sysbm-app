import { Shelf } from '../entities/shelf';
import { ShelfRepository } from './shelfRepository';

export class ShelfRepositoryInMemory implements ShelfRepository {
  shelfs: Shelf[] = [];
  async create(shelf: Shelf): Promise<void> {
    this.shelfs.push(shelf);
  }

  async findById(id: string): Promise<Shelf | null> {
    const shelf = this.shelfs.find((shelf) => shelf.id === id);
    if (!shelf) return null;

    return shelf;
  }

  async getAll(): Promise<Shelf[]> {
    throw new Error('Method not implemented.');
  }
}
