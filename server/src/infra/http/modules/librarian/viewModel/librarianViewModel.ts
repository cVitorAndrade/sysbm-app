import { Librarian } from 'src/modules/librarian/entities/librarian';

export class LibrarianViewModel {
  static toHttp({
    id,
    email,
    name,
    cpf,
    permission,
    phoneNumber,
    status,
    createdAt,
  }: Librarian) {
    return {
      id,
      email,
      name,
      cpf,
      permission,
      phoneNumber,
      status,
      createdAt,
    };
  }
}
