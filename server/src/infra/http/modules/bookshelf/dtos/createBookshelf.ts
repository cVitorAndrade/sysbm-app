import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookshelfBody {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  description: string;
}
