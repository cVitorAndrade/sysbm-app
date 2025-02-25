import { Module } from '@nestjs/common';
import { CreateLoanUseCase } from 'src/modules/loan/useCases/createLoanUseCase/createLoanUseCase';
import { LoanController } from './loan.controller';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { GetLoanDaysByPageCountUseCase } from 'src/modules/loan/useCases/getLoanDaysByPageCountUseCase/getLoanDaysByPageCountUseCase';
import { GetAllLoansUseCase } from 'src/modules/loan/useCases/getAllLoans/getAllLoans';
import { MarkLoanAsCompletedUseCase } from 'src/modules/loan/useCases/markLoanAsCompletedUseCase/markLoanAsCompletedUseCase';
import { RenewLoanUseCase } from 'src/modules/loan/useCases/renewLoanUseCase/renewLoanUseCase';

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateLoanUseCase,
    GetLoanDaysByPageCountUseCase,
    GetAllLoansUseCase,
    MarkLoanAsCompletedUseCase,
    RenewLoanUseCase,
  ],
  controllers: [LoanController],
})
export class LoanModule {}
