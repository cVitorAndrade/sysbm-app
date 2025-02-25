import { makeLibrarian } from 'src/modules/librarian/factories/librarianFactory';
import { ValidateLibrarianUseCase } from './validateLibrarianUseCase';
import { LibrarianRepositoryInMemory } from 'src/modules/librarian/repositories/LibrarianRepositoryInMemory';
import { hash } from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

let validateLibrarianUseCase: ValidateLibrarianUseCase;
let librarianRepositoryInMemory: LibrarianRepositoryInMemory;

describe('Validate librarian', () => {
  beforeEach(() => {
    librarianRepositoryInMemory = new LibrarianRepositoryInMemory();
    validateLibrarianUseCase = new ValidateLibrarianUseCase(
      librarianRepositoryInMemory,
    );
  });

  it('Should be able to return user when credentials are correct', async () => {
    const librarianPasswordWithoutEncryptation = '12345678';
    const librarian = makeLibrarian({
      password: await hash(librarianPasswordWithoutEncryptation, 10),
    });

    await librarianRepositoryInMemory.create(librarian);

    const result = await validateLibrarianUseCase.execute({
      email: librarian.email,
      password: librarianPasswordWithoutEncryptation,
    });

    expect(result).toEqual(librarian);
  });

  it('Should be able to throw error when credentials incorrect', async () => {
    const librarianPasswordWithoutEncryptation = '12345678';
    const librarian = makeLibrarian({
      password: await hash(librarianPasswordWithoutEncryptation, 10),
    });

    await librarianRepositoryInMemory.create(librarian);

    expect(async () => {
      await validateLibrarianUseCase.execute({
        email: librarian.email,
        password: 'incorrect_password',
      });
    }).rejects.toThrow(UnauthorizedException);

    expect(async () => {
      await validateLibrarianUseCase.execute({
        email: 'incorrect_email@email.com',
        password: librarianPasswordWithoutEncryptation,
      });
    }).rejects.toThrow(UnauthorizedException);
  });
});
