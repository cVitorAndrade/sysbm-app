import { Injectable, NotFoundException } from '@nestjs/common';
import { ReaderRepository } from '../../repositories/readerRepository';

interface DeleteReaderRequest {
  readerId: string;
}

@Injectable()
export class DeleteReaderByIdUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  async execute({ readerId }: DeleteReaderRequest) {
    const reader = await this.readerRepository.findById(readerId);
    if (!reader) throw new NotFoundException();

    reader.status = 'disabled';

    await this.readerRepository.update(reader);
  }
}
