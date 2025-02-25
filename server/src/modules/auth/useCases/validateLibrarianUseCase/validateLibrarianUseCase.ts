import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { LibrarianRepository } from 'src/modules/librarian/repositories/LibrarianRepository';

interface ValidateLibrarianRequest {
  email: string;
  password: string;
}

@Injectable()
export class ValidateLibrarianUseCase {
  constructor(private librarianRepository: LibrarianRepository) {}

  async execute({ email, password }: ValidateLibrarianRequest) {
    const librarian = await this.librarianRepository.findByEmail(email);
    if (!librarian) throw new UnauthorizedException('Email ou senha inválida');

    const isPasswordMatched = await compare(password, librarian.password);
    if (!isPasswordMatched)
      throw new UnauthorizedException('Email ou senha inválida');

    return librarian;
  }
}
