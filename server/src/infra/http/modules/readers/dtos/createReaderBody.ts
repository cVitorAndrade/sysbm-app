import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateReaderBody {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  birtDate: Date;

  @IsString()
  @IsNotEmpty()
  addressId: string;
}
