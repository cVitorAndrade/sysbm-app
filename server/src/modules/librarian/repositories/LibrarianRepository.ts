import { Librarian } from '../entities/librarian';

export abstract class LibrarianRepository {
  abstract create(librarian: Librarian): Promise<void>;
  abstract findByEmail(email: string): Promise<Librarian | null>;
}
