import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LibrarianPayload } from 'src/modules/auth/models/librarianPayload';
import { Librarian } from 'src/modules/librarian/entities/librarian';

interface SignInRequest {
  librarian: Librarian;
}

@Injectable()
export class SignInUseCase {
  constructor(private jwtService: JwtService) {}

  async execute({ librarian }: SignInRequest) {
    const payload: LibrarianPayload = {
      sub: librarian.id,
      email: librarian.email,
      name: librarian.name,
      password: librarian.password,
      cpf: librarian.cpf,
      permission: librarian.permission,
      phoneNumber: librarian.phoneNumber,
      status: librarian.status,
      createdAt: librarian.createdAt.toJSON(),
    };

    const jwtToken = this.jwtService.sign(payload);
    return jwtToken;
  }
}
