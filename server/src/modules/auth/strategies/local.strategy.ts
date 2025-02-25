import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { Librarian } from 'src/modules/librarian/entities/librarian';
import { ValidateLibrarianUseCase } from 'src/modules/auth/useCases/validateLibrarianUseCase/validateLibrarianUseCase';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateLibrarianUseCase: ValidateLibrarianUseCase) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<Librarian> {
    return await this.validateLibrarianUseCase.execute({
      email,
      password,
    });
  }
}
