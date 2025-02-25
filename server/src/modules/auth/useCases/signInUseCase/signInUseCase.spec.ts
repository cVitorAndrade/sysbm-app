import { JwtService } from '@nestjs/jwt';
import { SignInUseCase } from './signInUseCase';
import { makeLibrarian } from 'src/modules/librarian/factories/librarianFactory';
import { LibrarianPayload } from 'src/modules/auth/models/librarianPayload';

let signInUseCase: SignInUseCase;
let jwtService: JwtService;

describe('Sign In', () => {
  beforeEach(() => {
    jwtService = new JwtService({ secret: 'secret' });
    signInUseCase = new SignInUseCase(jwtService);
  });

  it('Should be able to create valid access_token', async () => {
    const librarian = makeLibrarian({});
    const token = await signInUseCase.execute({ librarian });

    const payload = jwtService.decode(token) as LibrarianPayload;

    expect(payload.sub).toEqual(librarian.id);
  });
});
