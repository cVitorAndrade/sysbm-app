import { Injectable } from '@nestjs/common';
import { ReaderRepository } from '../../repositories/readerRepository';
import { Reader } from '../../entities/reader';

interface CreateReaderRequest {
  email: string;
  name: string;
  cpf: string;
  phoneNumber: string;
  status: string;
  birtDate: Date;
  addressId: string;
}

@Injectable()
export class CreateReaderUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  async execute(createReaderRequest: CreateReaderRequest) {
    const reader = new Reader(createReaderRequest);
    await this.readerRepository.create(reader);
    return reader;
  }
}
