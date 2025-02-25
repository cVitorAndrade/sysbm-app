import { Injectable, NotFoundException } from '@nestjs/common';
import { BookshelfRepository } from '../../repositories/bookshelfRepository';

interface GetBookshelfRequest {
  id: string;
}

@Injectable()
export class GetBookshelfUseCase {
  constructor(private bookshelfRepository: BookshelfRepository) {}

  async execute({ id }: GetBookshelfRequest) {
    const bookshelf = await this.bookshelfRepository.findById(id);
    if (!bookshelf) throw new NotFoundException();
    return bookshelf;
  }
}
