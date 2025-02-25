import { Shelf } from '../entities/shelf';

export abstract class ShelfRepository {
  abstract create(shelf: Shelf): Promise<void>;
  abstract findById(id: string): Promise<Shelf | null>;
  abstract getAll(): Promise<Shelf[]>;
}
