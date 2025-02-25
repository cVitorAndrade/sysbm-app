import { IsEmail, IsString } from 'class-validator';

export class UpdateReaderBody {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  status: string;

  @IsString()
  birtDate: Date;

  @IsString()
  addressId: string;
}
