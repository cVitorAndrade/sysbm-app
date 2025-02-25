import { IsNotEmpty, IsString } from 'class-validator';
import { LoanStatus } from 'src/modules/loan/entities/loanStatus';

export class MarkLoanAsCompletedBody {
  @IsNotEmpty()
  @IsString()
  bookConditionReturn: string;

  status: LoanStatus;
}
