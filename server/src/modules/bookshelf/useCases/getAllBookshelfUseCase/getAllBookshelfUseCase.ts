import { Injectable } from '@nestjs/common';
import { BookshelfRepository } from '../../repositories/bookshelfRepository';

@Injectable()
export class GetAllBookshelfUseCase {
  constructor(private bookshelfRepository: BookshelfRepository) {}

  async execute() {
    return await this.bookshelfRepository.getAll();
  }
}
