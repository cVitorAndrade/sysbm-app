import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoanRepository } from '../../repositories/LoanRepository';

interface RenewLoanRequest {
  loanId: string;
}

@Injectable()
export class RenewLoanUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async execute({ loanId }: RenewLoanRequest) {
    const loan = await this.loanRepository.findById(loanId);
    if (!loan) throw new NotFoundException();

    const canRenew = loan.timesRenewed < 3;
    if (!canRenew) throw new UnauthorizedException();

    const renewDays = 15;

    loan.finalDate = new Date(
      new Date(loan.finalDate).setDate(
        new Date(loan.finalDate).getDate() + renewDays,
      ),
    );

    loan.timesRenewed = loan.timesRenewed + 1;

    await this.loanRepository.save(loan);

    return loan;
  }
}
