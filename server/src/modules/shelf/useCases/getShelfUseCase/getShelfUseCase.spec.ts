import { Bookshelf } from 'src/modules/bookshelf/entities/bookshelf';
import { Shelf } from '../../entities/shelf';
import { ShelfRepositoryInMemory } from '../../repositories/shelfRepositoryInMemory';
import { GetShelfUseCase } from './getShelfUseCase';
import { NotFoundException } from '@nestjs/common';

let getShelfUseCase: GetShelfUseCase;
let shelfRepositoryInMemory: ShelfRepositoryInMemory;

describe('Get shelf', () => {
  beforeEach(() => {
    shelfRepositoryInMemory = new ShelfRepositoryInMemory();
    getShelfUseCase = new GetShelfUseCase(shelfRepositoryInMemory);
  });

  it('Should be able to return shelf', async () => {
    const bookshelf = new Bookshelf({
      color: 'example_color',
      name: 'example_name',
    });

    const shelf = new Shelf({
      bookShelfId: bookshelf.id,
      letter: 'example_letter',
      number: 'example_number',
    });

    shelfRepositoryInMemory.shelfs = [shelf];

    const foundeShelf = await getShelfUseCase.execute({
      id: shelf.id,
    });

    expect(shelf).toEqual(foundeShelf);
  });

  it('Should be able to throw erro when not found shelf', async () => {
    const bookshelf = new Bookshelf({
      color: 'example_color',
      name: 'example_name',
    });

    const shelf = new Shelf({
      bookShelfId: bookshelf.id,
      letter: 'example_letter',
      number: 'example_number',
    });

    shelfRepositoryInMemory.shelfs = [shelf];

    expect(async () => {
      await getShelfUseCase.execute({ id: 'invalid_id' });
    }).rejects.toThrow(NotFoundException);
  });
});
