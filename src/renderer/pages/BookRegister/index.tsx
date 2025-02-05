import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import fullLogo from '../../../../assets/full-logo.png';
import Breadcrumb from '../../../components/Breadcrumb';
import Button from '../../../components/Button';
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
import { IShelf } from '../../interfaces/IShelf';
import { IBookshelf } from '../../interfaces/IBookshelf';
import { BookshelfService } from '../../services/bookshelf.service';
import { ShelfService } from '../../services/shelf.service';
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
  // available: z.string().nonempty('Campo obrigatório'),
  isbn: z.string().nonempty('Campo obrigatório'),
  numberOfPages: z.string().nonempty('Campo obrigatório'),
  publicationYear: z.string().nonempty('Campo obrigatório'), // Novo campo
});

export default function BookRegister() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(createBookSchema) });

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

      await BookService.createBook({
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
      });

      alert('Livro cadastrado com sucesso');
    } catch (error) {
      console.log('BookRegister - onSubmit: ', error);
    } finally {
      reset();
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <FormSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <h2>Cadastro de livros</h2>
          <FormWrapper
            onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
          >
            <FormRow>
              <FormField>
                <label>Número de registro</label>
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
                <label>Título</label>
                <input {...register('title')} />
                {errors.title && <span>{errors.title.message}</span>}
              </FormField>
              <FormField>
                <label>Editora</label>
                <input {...register('publisher')} />
                {errors.publisher && <span>{errors.publisher.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Volume</label>
                <input {...register('volume')} />
                {errors.volume && <span>{errors.volume.message}</span>}
              </FormField>
              <FormField>
                <label>Gênero</label>
                <input {...register('genre')} />
                {errors.genre && <span>{errors.genre.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Idioma</label>
                <input {...register('language')} />
                {errors.language && <span>{errors.language.message}</span>}
              </FormField>
              <FormField>
                <label>ISBN</label>
                <input {...register('isbn')} />
                {errors.isbn && <span>{errors.isbn.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Número de páginas</label>
                <input {...register('numberOfPages')} />
                {errors.numberOfPages && (
                  <span>{errors.numberOfPages.message}</span>
                )}
              </FormField>
              <FormField>
                <label>Quantidade de cópias</label>
                <input {...register('copies')} />
                {errors.copies && <span>{errors.copies.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Método de aquisição</label>
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
                <label>Ano de Publicação</label>
                <input type="text" {...register('publicationYear')} />
                {errors.publicationYear && (
                  <span>{errors.publicationYear.message}</span>
                )}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Estante</label>
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
                <label>Prateleira</label>
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
