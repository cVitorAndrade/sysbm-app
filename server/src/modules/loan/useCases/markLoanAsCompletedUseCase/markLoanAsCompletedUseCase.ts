import { Injectable, NotFoundException } from '@nestjs/common';
import { LoanRepository } from '../../repositories/LoanRepository';
import { LoanStatus } from '../../entities/loanStatus';

interface MarkLoanAsCompletedRequest {
  receivedById: string;
  bookConditionReturn: string;
  status: LoanStatus | null;
  loanId: string;
}

@Injectable()
export class MarkLoanAsCompletedUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute({
    bookConditionReturn,
    receivedById,
    status,
    loanId,
  }: MarkLoanAsCompletedRequest) {
    const loan = await this.loanRepository.findById(loanId);
    if (!loan) throw new NotFoundException();

    loan.bookConditionReturn = bookConditionReturn;
    loan.receivedById = receivedById;
    loan.status = status ?? this.determineLoanStatus(loan.finalDate);
    loan.returnDate = new Date();

    await this.loanRepository.save(loan);
    return loan;
  }

  private determineLoanStatus(finalDate: Date): LoanStatus {
    return new Date() > finalDate ? 'returnedLate' : 'returnedOnTime';
  }
}
