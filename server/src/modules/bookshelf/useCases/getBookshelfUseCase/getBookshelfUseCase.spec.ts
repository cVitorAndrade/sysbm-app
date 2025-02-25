import { BookRepositoryInMemory } from 'src/modules/book/repositories/BookRepositoryInMemory';
import { BookshelfRepositoryInMemory } from '../../repositories/bookshelfRepositoryInMemory';
import { GetBookshelfUseCase } from './getBookshelfUseCase';
import { Bookshelf } from '../../entities/bookshelf';
import { NotFoundException } from '@nestjs/common';

let getBookshelfUseCase: GetBookshelfUseCase;
let bookshelfRepositoryInMemory: BookshelfRepositoryInMemory;

describe('Get bookshelf', () => {
  beforeEach(() => {
    bookshelfRepositoryInMemory = new BookshelfRepositoryInMemory();
    getBookshelfUseCase = new GetBookshelfUseCase(bookshelfRepositoryInMemory);
  });

  it('Should be able to return bookshlef', async () => {
    const bookshelf = new Bookshelf({
      color: 'example_color',
      name: 'example_name',
    });

    bookshelfRepositoryInMemory.bookshelfs = [bookshelf];

    const foundedBookshelf = await getBookshelfUseCase.execute({
      id: bookshelf.id,
    });

    expect(bookshelf).toEqual(foundedBookshelf);
  });

  it('Should be able to throw erro when not found bookshelf', async () => {
    const bookshelf = new Bookshelf({
      color: 'example_color',
      name: 'example_name',
    });

    bookshelfRepositoryInMemory.bookshelfs = [bookshelf];

    expect(async () => {
      await getBookshelfUseCase.execute({ id: 'invalid_id' });
    }).rejects.toThrow(NotFoundException);
  });
});
