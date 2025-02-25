import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignInBody {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
