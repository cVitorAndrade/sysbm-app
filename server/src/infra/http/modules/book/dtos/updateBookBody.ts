import { IsString } from 'class-validator';

export class UpdateBookBody {
  @IsString()
  registrationNumber: string;

  @IsString()
  author: string;

  @IsString()
  volume: string;

  @IsString()
  shelfId: string;

  @IsString()
  bookShelfId: string;

  @IsString()
  publicationYear: string;

  notes: string;

  @IsString()
  publisher: string;

  @IsString()
  copies: string;

  @IsString()
  acquisitionMethod: string;

  @IsString()
  title: string;

  @IsString()
  genre: string;

  @IsString()
  language: string;

  @IsString()
  available: string;

  @IsString()
  isbn: string;

  @IsString()
  numberOfPages: string;
}
