import { Injectable, NotFoundException } from '@nestjs/common';
import { ShelfRepository } from '../../repositories/shelfRepository';

interface GetShelfRequest {
  id: string;
}

@Injectable()
export class GetShelfUseCase {
  constructor(private shelfRepository: ShelfRepository) {}

  async execute({ id }: GetShelfRequest) {
    const shelf = await this.shelfRepository.findById(id);
    if (!shelf) throw new NotFoundException();

    return shelf;
  }
}
