import { BookRepositoryInMemory } from '../../repositories/BookRepositoryInMemory';
import { CreateBookUseCase } from './createBookUseCase';

let createBookUseCase: CreateBookUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory;

describe('Create book', () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BookRepositoryInMemory();
    createBookUseCase = new CreateBookUseCase(bookRepositoryInMemory);
  });

  it('Should be able to create book', async () => {
    expect(bookRepositoryInMemory.books).toEqual([]);
    const book = await createBookUseCase.execute({
      registrationNumber: '12345',
      author: 'John Doe',
      volume: '1',
      shelfId: 'd8a2c71e-f2b2-48a6-85fe-53437432f2fe',
      bookShelfId: '6e3762f9-8df5-4880-b44d-2f766f35a133',
      publicationYear: '2020',
      notes: 'Edição especial com prefácio do autor.',
      publisher: 'Editora Exemplar',
      copies: '5',
      acquisitionMethod: 'Doação',
      title: 'A Jornada do Conhecimento',
      librarianId: '222ce2cc-c6ee-4c54-801f-b8642a54081c',
      genre: 'Ficção Científica',
      language: 'Português',
      available: '3',
      isbn: '978-3-16-148410-0',
      numberOfPages: '350',
    });

    expect(bookRepositoryInMemory.books).toEqual([book]);
  });
});
