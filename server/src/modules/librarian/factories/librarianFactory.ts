import { Librarian } from '../entities/librarian';

type Override = Partial<Librarian>;

export const makeLibrarian = ({ id, ...override }: Override) => {
  return new Librarian(
    {
      email: 'teste@email.com',
      name: 'Librarian',
      password: '12345678',
      permission: 'admin',
      cpf: '00000000000',
      phoneNumber: '889988776655',
      status: 'active',
      ...override,
    },
    id,
  );
};
