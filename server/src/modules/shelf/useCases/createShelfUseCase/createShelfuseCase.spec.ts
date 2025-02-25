import { ShelfRepositoryInMemory } from '../../repositories/shelfRepositoryInMemory';
import { CreateShelfUseCase } from './createShelfUseCase';

let createShelfUseCase: CreateShelfUseCase;
let shelfRepositoryInMemory: ShelfRepositoryInMemory;

describe('Create shelf', () => {
  beforeEach(() => {
    shelfRepositoryInMemory = new ShelfRepositoryInMemory();
    createShelfUseCase = new CreateShelfUseCase(shelfRepositoryInMemory);
  });

  it('Should be able to create shelf', async () => {
    expect(shelfRepositoryInMemory.shelfs).toEqual([]);

    const shelf = await createShelfUseCase.execute({
      number: '1',
      letter: 'A',
      bookShelfId: 'bookshelf-id',
    });

    expect(shelfRepositoryInMemory.shelfs).toEqual([shelf]);
  });
});
