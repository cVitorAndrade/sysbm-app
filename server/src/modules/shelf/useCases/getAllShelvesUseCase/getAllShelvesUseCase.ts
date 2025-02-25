import { Injectable } from '@nestjs/common';
import { ShelfRepository } from '../../repositories/shelfRepository';

@Injectable()
export class GetAllShelvesUseCase {
  constructor(private shelfRepository: ShelfRepository) {}

  async execute() {
    return await this.shelfRepository.getAll();
  }
}
