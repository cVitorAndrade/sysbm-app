import { Injectable } from '@nestjs/common';
import { Bookshelf } from '../../entities/bookshelf';
import { BookshelfRepository } from '../../repositories/bookshelfRepository';

interface CreateBookshelfRequest {
  name: string;
  color: string;
  description: string | null;
}

@Injectable()
export class CreateBookshelfUseCase {
  constructor(private bookshelfRepository: BookshelfRepository) {}

  async execute(createBookshelfRequest: CreateBookshelfRequest) {
    const bookshelf = new Bookshelf(createBookshelfRequest);

    await this.bookshelfRepository.create(bookshelf);
    return bookshelf;
  }
}
