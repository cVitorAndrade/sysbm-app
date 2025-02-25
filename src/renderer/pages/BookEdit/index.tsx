import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '../../../components/Button';
import Breadcrumb from '../../../components/Breadcrumb';
import Header from '../../../components/Header';
import {
  Container,
  Content,
  FormSection,
  FormWrapper,
  FormField,
  FormRow,
  ButtonWrapper,
} from './styles';
import { IBookshelf } from '../../interfaces/IBookshelf';
import { IShelf } from '../../interfaces/IShelf';
import { BookshelfService } from '../../services/bookshelf.service';
import { ShelfService } from '../../services/shelf.service';

import fullLogo from '../../../../assets/full-logo.png';
import { BookService } from '../../services/book.service';

const createBookSchema = z.object({
  registrationNumber: z.string().nonempty('Campo obrigatório'),
  author: z.string().nonempty('Campo obrigatório'),
  volume: z.string().nonempty('Campo obrigatório'),
  shelfId: z.string().nonempty('Campo obrigatório'),
  bookShelfId: z.string().nonempty('Campo obrigatório'),
  notes: z.string().optional(),
  publisher: z.string().nonempty('Campo obrigatório'),
  copies: z.string().nonempty('Campo obrigatório'),
  acquisitionMethod: z.string().nonempty('Campo obrigatório'),
  title: z.string().nonempty('Campo obrigatório'),
  genre: z.string().nonempty('Campo obrigatório'),
  language: z.string().nonempty('Campo obrigatório'),
  isbn: z.string().nonempty('Campo obrigatório'),
  numberOfPages: z.string().nonempty('Campo obrigatório'),
  publicationYear: z.string().nonempty('Campo obrigatório'),
});

export default function BookEdit() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(createBookSchema) });

  const [bookIsbn, setBookIsbn] = useState<string>('');
  const [bookIdGlobal, setBookIdGlobal] = useState<string>('');

  const [bookshelfs, setBookshelfs] = useState<IBookshelf[]>([]);
  const [shelves, setShelves] = useState<IShelf[]>([]);

  const bookShelfIdWatch = watch('bookShelfId');

  useEffect(() => {
    async function fetchData() {
      try {
        const allShelves = await ShelfService.getAllShelves();
        setShelves(allShelves);
        const allBookshelfs = await BookshelfService.getAllBookshelf();
        setBookshelfs(allBookshelfs);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchData();
  }, []);

  const filteredShelves = shelves.filter(
    (shelf) => shelf.bookShelfId === bookShelfIdWatch,
  );

  const onSubmit = async (values: z.infer<typeof createBookSchema>) => {
    try {
      const {
        acquisitionMethod,
        author,
        bookShelfId,
        copies,
        genre,
        isbn,
        language,
        numberOfPages,
        publisher,
        registrationNumber,
        shelfId,
        title,
        volume,
        notes,
        publicationYear,
      } = values;

      await BookService.updateBook(bookIdGlobal, {
        acquisitionMethod,
        author,
        available: copies,
        bookShelfId,
        copies,
        genre,
        isbn,
        language,
        notes: notes ?? null,
        numberOfPages,
        publicationYear,
        publisher,
        registrationNumber,
        shelfId,
        title,
        volume,
        bookId: bookIdGlobal,
      });

      alert('Livro atualizado  com sucesso');
    } catch (error) {
      console.log('BookRegister - onSubmit: ', error);
    } finally {
      // reset();
    }
  };

  useEffect(() => {
    const onGetBookDetails = async () => {
      try {
        const bookIsbnParam = searchParams.get('isbn');
        if (!bookIsbnParam) return;

        const book = await BookService.getBookByIsbn(bookIsbnParam);
        console.log({ book });
        const {
          acquisitionMethod,
          author,
          available,
          bookShelfId,
          copies,
          createdAt,
          genre,
          id,
          isbn,
          language,
          notes,
          numberOfPages,
          publicationYear,
          publisher,
          registrationNumber,
          shelfId,
          title,
          volume,
        } = book;

        setBookIsbn(bookIsbnParam);
        setBookIdGlobal(id);

        const allBookshelves = await BookshelfService.getAllBookshelf();
        const [validBookshelf] = allBookshelves.filter(
          ({ id: _id }) => _id === bookShelfId,
        );

        setValue('registrationNumber', registrationNumber);
        setValue('author', author);
        setValue('volume', volume);
        setValue('notes', notes);
        setValue('publisher', publisher);
        setValue('copies', copies);
        setValue('acquisitionMethod', acquisitionMethod);
        setValue('title', title);
        setValue('genre', genre);
        setValue('language', language);
        setValue('numberOfPages', numberOfPages);
        setValue('isbn', isbn);
        setValue('publicationYear', publicationYear);
      } catch (error) {
        console.log('BookRegister - onGetBookDetails: ', error);
      }
    };

    onGetBookDetails();
  }, []);

  return (
    <Container>
      <Header />
      {/* <Content>
        <Breadcrumb>
          <Link to="/books" style={{ color: 'white', fontWeight: '500' }}>
            LIVROS
          </Link>
        </Breadcrumb>
        <FormSection>
          <h2>Editar Livro</h2>
          <FormWrapper>
            <FormRow>
              <FormField>
                <label>Número de registro</label>
                <input type="text" placeholder="Exemplo" />
              </FormField>
              <FormField>
                <label>Data</label>
                <input type="text" placeholder="(88) 99999-9999" />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Autor</label>
                <input type="text" placeholder="00000000" />
              </FormField>
              <FormField>
                <label>Título</label>
                <input type="email" placeholder="Exemplo@email.com" />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Volume</label>
                <input type="text" placeholder="Exemplo..." />
              </FormField>
              <FormField>
                <label>Exemplar</label>
                <input type="text" placeholder="0000000" />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Local</label>
                <input type="text" placeholder="Exemplo..." />
              </FormField>
              <FormField>
                <label>Editora</label>
                <input type="text" placeholder="0000000" />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Ano de publicação</label>
                <input type="text" placeholder="Exemplo..." />
              </FormField>
              <FormField>
                <label>Forma de aquisição</label>
                <input type="text" placeholder="0000000" />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Observação</label>
                <input type="text" placeholder="0000000" />
              </FormField>
            </FormRow>

            <ButtonWrapper>
              <Button title="CANCELAR" onClick={() => navigate('/books')} />
              <Button title="CADASTRAR" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content> */}

      <Content>
        <Breadcrumb>
          <Link to="/books" style={{ color: 'white', fontWeight: '500' }}>
            LIVROS
          </Link>
        </Breadcrumb>
        <FormSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <h2>Cadastro de livros</h2>
          <FormWrapper
            onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
          >
            <FormRow>
              <FormField>
                <label>
                  Número de registro <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('registrationNumber')} />
                {errors.registrationNumber && (
                  <span>{errors.registrationNumber.message}</span>
                )}
              </FormField>
              <FormField>
                <label>Autor</label>
                <input {...register('author')} />
                {errors.author && <span>{errors.author.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>
                  Título <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('title')} />
                {errors.title && <span>{errors.title.message}</span>}
              </FormField>
              <FormField>
                <label>
                  Editora <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('publisher')} />
                {errors.publisher && <span>{errors.publisher.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>
                  Volume <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('volume')} />
                {errors.volume && <span>{errors.volume.message}</span>}
              </FormField>
              <FormField>
                <label>
                  Gênero <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('genre')} />
                {errors.genre && <span>{errors.genre.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>
                  Idioma <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('language')} />
                {errors.language && <span>{errors.language.message}</span>}
              </FormField>
              <FormField>
                <label>
                  ISBN <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('isbn')} />
                {errors.isbn && <span>{errors.isbn.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>
                  Número de páginas <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('numberOfPages')} />
                {errors.numberOfPages && (
                  <span>{errors.numberOfPages.message}</span>
                )}
              </FormField>
              <FormField>
                <label>
                  Quantidade de cópias <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('copies')} />
                {errors.copies && <span>{errors.copies.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>
                  Método de aquisição <span style={{ color: 'red' }}>*</span>
                </label>
                <input {...register('acquisitionMethod')} />
                {errors.acquisitionMethod && (
                  <span>{errors.acquisitionMethod.message}</span>
                )}
              </FormField>
              {/* <FormField>
                <label>Disponível</label>
                <input {...register('available')} />
                {errors.available && <span>{errors.available.message}</span>}
              </FormField> */}
            </FormRow>

            <FormRow>
              <FormField>
                <label>
                  Ano de Publicação <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="text" {...register('publicationYear')} />
                {errors.publicationYear && (
                  <span>{errors.publicationYear.message}</span>
                )}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>
                  Estante <span style={{ color: 'red' }}>*</span>
                </label>
                <select
                  {...register('bookShelfId')}
                  onChange={(e) => setValue('bookShelfId', e.target.value)}
                >
                  <option value="">Selecione</option>
                  {bookshelfs.map((bookshelf) => (
                    <option key={bookshelf.id} value={bookshelf.id}>
                      {bookshelf.name} - {bookshelf.color}
                    </option>
                  ))}
                </select>
                {errors.bookShelfId && (
                  <span>{errors.bookShelfId.message}</span>
                )}
              </FormField>
              <FormField>
                <label>
                  Prateleira <span style={{ color: 'red' }}>*</span>
                </label>
                <select
                  {...register('shelfId')}
                  onChange={(e) => setValue('shelfId', e.target.value)}
                >
                  <option value="">Selecione</option>
                  {filteredShelves.map((shelf) => (
                    <option key={shelf.id} value={shelf.id}>
                      {shelf.number} - {shelf.letter}
                    </option>
                  ))}
                </select>
                {errors.shelfId && <span>{errors.shelfId.message}</span>}
              </FormField>
            </FormRow>

            <FormField>
              <label>Anotação</label>
              <input {...register('notes')} />
            </FormField>

            <ButtonWrapper>
              <Button title="CANCELAR" onClick={() => navigate('/books')} />
              <Button title="CADASTRAR" type="submit" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
