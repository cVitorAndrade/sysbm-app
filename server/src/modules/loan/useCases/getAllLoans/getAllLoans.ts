import { Injectable } from '@nestjs/common';
import { LoanRepository } from '../../repositories/LoanRepository';

@Injectable()
export class GetAllLoansUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute() {
    return await this.loanRepository.getAll();
  }
}
