import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface BookSchema {
  registrationNumber: string;
  author: string;
  volume: string;
  shelfId: string;
  bookShelfId: string;
  publicationYear: string;
  notes: string | null;
  publisher: string;
  createdAt: Date;
  copies: string;
  acquisitionMethod: string;
  title: string;
  status: string;
  librarianId: string;
  genre: string;
  language: string;
  available: string;
  isbn: string;
  numberOfPages: string;
}

export class Book {
  private _id: string;
  private props: BookSchema;

  constructor(
    props: Replace<
      BookSchema,
      { createdAt?: Date; notes?: string; status?: string | null }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      notes: props.notes ?? null,
      status: props.status ?? 'active',
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get registrationNumber(): string {
    return this.props.registrationNumber;
  }

  set registrationNumber(registrationNumber: string) {
    this.props.registrationNumber = registrationNumber;
  }

  get author(): string {
    return this.props.author;
  }

  set author(author: string) {
    this.props.author = author;
  }

  get volume(): string {
    return this.props.volume;
  }

  set volume(volume: string) {
    this.props.volume = volume;
  }

  get shelfId(): string {
    return this.props.shelfId;
  }

  set shelfId(shelfId: string) {
    this.props.shelfId = shelfId;
  }

  get bookShelfId(): string {
    return this.props.bookShelfId;
  }

  set bookShelfId(bookShelfId: string) {
    this.props.bookShelfId = bookShelfId;
  }

  get status(): string {
    return this.props.status;
  }

  set status(status: string) {
    this.props.status = status;
  }

  get publicationYear(): string {
    return this.props.publicationYear;
  }

  set publicationYear(publicationYear: string) {
    this.props.publicationYear = publicationYear;
  }

  get notes(): string | null {
    return this.props.notes;
  }

  set notes(notes: string) {
    this.props.notes = notes;
  }

  get publisher(): string {
    return this.props.publisher;
  }

  set publisher(publisher: string) {
    this.props.publisher = publisher;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get copies(): string {
    return this.props.copies;
  }

  set copies(copies: string) {
    this.props.copies = copies;
  }

  get acquisitionMethod(): string {
    return this.props.acquisitionMethod;
  }

  set acquisitionMethod(acquisitionMethod: string) {
    this.props.acquisitionMethod = acquisitionMethod;
  }

  get title(): string {
    return this.props.title;
  }

  set title(title: string) {
    this.props.title = title;
  }

  get librarianId(): string {
    return this.props.librarianId;
  }

  set librarianId(librarianId: string) {
    this.props.librarianId = librarianId;
  }

  get genre(): string {
    return this.props.genre;
  }

  set genre(genre: string) {
    this.props.genre = genre;
  }

  get language(): string {
    return this.props.language;
  }

  set language(language: string) {
    this.props.language = language;
  }

  get available(): string {
    return this.props.available;
  }

  set available(available: string) {
    this.props.available = available;
  }

  get isbn(): string {
    return this.props.isbn;
  }

  set isbn(isbn: string) {
    this.props.isbn = isbn;
  }

  get numberOfPages(): string {
    return this.props.numberOfPages;
  }

  set numberOfPages(numberOfPages: string) {
    this.props.numberOfPages = numberOfPages;
  }
}
