import { Injectable } from '@nestjs/common';
import { ReaderRepository } from '../../repositories/readerRepository';

interface UpdateReaderRequest {
  readerId: string;

  email: string;
  name: string;
  cpf: string;
  phoneNumber: string;
  birtDate: Date;
}

@Injectable()
export class UpdateReaderUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  async execute({
    readerId,
    birtDate,
    cpf,
    email,
    name,
    phoneNumber,
  }: UpdateReaderRequest) {
    const reader = await this.readerRepository.findById(readerId);
    if (!reader) return;

    reader.birtDate = birtDate ?? reader.birtDate;
    reader.cpf = cpf ?? reader.cpf;
    reader.email = email ?? reader.email;
    reader.name = name ?? reader.name;
    reader.phoneNumber = phoneNumber ?? reader.phoneNumber;

    this.readerRepository.update(reader);
    return reader;
  }
}
