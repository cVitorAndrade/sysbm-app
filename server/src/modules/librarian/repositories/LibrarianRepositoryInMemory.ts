import { Librarian } from '../entities/librarian';
import { LibrarianRepository } from './LibrarianRepository';

export class LibrarianRepositoryInMemory implements LibrarianRepository {
  librarians: Librarian[] = [];
  async create(librarian: Librarian): Promise<void> {
    this.librarians.push(librarian);
  }

  async findByEmail(email: string): Promise<Librarian | null> {
    const librarian = this.librarians.find(
      (librarian) => librarian.email === email,
    );

    if (!librarian) return null;
    return librarian;
  }
}
