import { Injectable } from '@nestjs/common';
import { ReaderRepository } from '../../repositories/readerRepository';

@Injectable()
export class GetAllReadersUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  async execute() {
    const readers = await this.readerRepository.getAll();
    return readers;
  }
}
