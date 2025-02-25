import { ReaderRepositoryInMemory } from '../../repositories/readerRepositoryInMemory';
import { CreateReaderUseCase } from './createReaderUseCase';

let createReaderUseCase: CreateReaderUseCase;
let readerRepositoryInMemory: ReaderRepositoryInMemory;

describe('Create reader', () => {
  beforeEach(() => {
    readerRepositoryInMemory = new ReaderRepositoryInMemory();
    createReaderUseCase = new CreateReaderUseCase(readerRepositoryInMemory);
  });

  it('Should be able to create reader', async () => {
    expect(readerRepositoryInMemory.readers).toEqual([]);

    const reader = await createReaderUseCase.execute({
      name: 'vitor',
      birtDate: new Date('2003-01-01'),
      cpf: '00000000000',
      email: 'email@example.com',
      phoneNumber: '88988776655',
      status: 'active',
      addressId: '025812f5-f79f-41b1-b2ed-ea1fd2817b6c',
    });

    expect(readerRepositoryInMemory.readers).toEqual([reader]);
  });
});
