import { Book } from 'src/modules/book/entities/book';

export class BookViewModel {
  static toHttp({
    acquisitionMethod,
    author,
    available,
    bookShelfId,
    copies,
    createdAt,
    genre,
    id,
    isbn,
    language,
    librarianId,
    notes,
    numberOfPages,
    publicationYear,
    publisher,
    registrationNumber,
    shelfId,
    title,
    volume,
    status,
  }: Book) {
    return {
      acquisitionMethod,
      author,
      available,
      bookShelfId,
      copies,
      createdAt,
      genre,
      id,
      isbn,
      language,
      librarianId,
      notes,
      numberOfPages,
      publicationYear,
      publisher,
      registrationNumber,
      shelfId,
      title,
      volume,
      status,
    };
  }
}
