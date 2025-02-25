import { BookshelfRepositoryInMemory } from '../../repositories/bookshelfRepositoryInMemory';
import { CreateBookshelfUseCase } from './createBookshelfUseCase';

let createBookshelfUseCase: CreateBookshelfUseCase;
let bookshelfRepositoryInMemory: BookshelfRepositoryInMemory;

describe('Create bookshelf', () => {
  beforeEach(() => {
    bookshelfRepositoryInMemory = new BookshelfRepositoryInMemory();
    createBookshelfUseCase = new CreateBookshelfUseCase(
      bookshelfRepositoryInMemory,
    );
  });

  it('Should be able to create bookshelf', async () => {
    expect(bookshelfRepositoryInMemory.bookshelfs).toEqual([]);
    const bookshelf = await createBookshelfUseCase.execute({
      name: 'Bookshelf Example',
      color: 'Green',
      description: '',
    });

    expect(bookshelfRepositoryInMemory.bookshelfs).toEqual([bookshelf]);
  });
});
