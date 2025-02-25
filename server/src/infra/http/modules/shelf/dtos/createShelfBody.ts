import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShelfBody {
  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  letter: string;

  @IsString()
  @IsNotEmpty()
  bookShelfId: string;
}
