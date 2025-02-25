import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookBody {
  @IsString()
  @IsNotEmpty()
  registrationNumber: string;
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  volume: string;

  @IsString()
  @IsNotEmpty()
  shelfId: string;

  @IsString()
  @IsNotEmpty()
  bookShelfId: string;

  @IsString()
  @IsNotEmpty()
  publicationYear: string;

  notes: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;

  @IsString()
  @IsNotEmpty()
  copies: string;

  @IsString()
  @IsNotEmpty()
  acquisitionMethod: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsString()
  @IsNotEmpty()
  available: string;

  @IsString()
  @IsNotEmpty()
  isbn: string;

  @IsString()
  @IsNotEmpty()
  numberOfPages: string;
}
