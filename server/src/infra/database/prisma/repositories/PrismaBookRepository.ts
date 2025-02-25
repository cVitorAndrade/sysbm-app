import { Book } from 'src/modules/book/entities/book';
import { BookRepository } from 'src/modules/book/repositories/BookRepository';
import { PrismaService } from '../prisma.service';
import { PrismaBookMapper } from '../mappers/PrismaBookMapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private prismaService: PrismaService) {}

  async create(book: Book): Promise<void> {
    const bookRaw = PrismaBookMapper.toPrisma(book);

    await this.prismaService.book.create({
      data: bookRaw,
    });
  }

  async getAll(): Promise<Book[]> {
    const booksRaw = await this.prismaService.book.findMany();
    const books = booksRaw.map((book) => PrismaBookMapper.toDomain(book));
    return books;
  }

  async findById(id: string): Promise<Book | null> {
    const book = await this.prismaService.book.findUnique({
      where: { id },
    });
    if (!book) return null;

    return PrismaBookMapper.toDomain(book);
  }

  async findByIsbn(isbn: string): Promise<Book | null> {
    const book = await this.prismaService.book.findUnique({
      where: { isbn },
    });
    if (!book) return null;

    return PrismaBookMapper.toDomain(book);
  }

  async update(book: Book): Promise<void> {
    const bookRaw = PrismaBookMapper.toPrisma(book);
    await this.prismaService.book.update({
      data: bookRaw,
      where: {
        id: book.id,
      },
    });
  }
}
