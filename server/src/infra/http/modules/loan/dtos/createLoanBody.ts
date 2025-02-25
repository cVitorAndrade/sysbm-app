import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLoanBody {
  @IsString()
  @IsNotEmpty()
  readerId: string;

  @IsString()
  @IsNotEmpty()
  bookId: string;

  @IsString()
  observation: string;

  @IsString()
  @IsNotEmpty()
  bookConditionDelivery: string;
}
