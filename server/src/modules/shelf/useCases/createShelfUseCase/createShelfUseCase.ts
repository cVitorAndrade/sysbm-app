import { Injectable } from '@nestjs/common';
import { ShelfRepository } from '../../repositories/shelfRepository';
import { Shelf } from '../../entities/shelf';

interface CreateShelfRequest {
  number: string;
  letter: string;
  bookShelfId: string;
}

@Injectable()
export class CreateShelfUseCase {
  constructor(private shelfRepository: ShelfRepository) {}

  async execute(createShelfRequest: CreateShelfRequest) {
    const shelf = new Shelf(createShelfRequest);
    await this.shelfRepository.create(shelf);
    return shelf;
  }
}
