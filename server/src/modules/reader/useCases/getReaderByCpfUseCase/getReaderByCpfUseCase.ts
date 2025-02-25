import { Injectable } from '@nestjs/common';
import { ReaderRepository } from '../../repositories/readerRepository';

interface GetUserByCpfRequest {
  cpf: string;
}

@Injectable()
export class GetUserByCpfUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  async execute({ cpf }: GetUserByCpfRequest) {
    const reader = await this.readerRepository.findByCpf(cpf);
    return reader;
  }
}
