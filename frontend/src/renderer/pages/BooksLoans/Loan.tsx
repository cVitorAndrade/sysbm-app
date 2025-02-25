import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { z } from 'zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
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
import { ReaderService } from '../../services/reader.service';
import { BookService } from '../../services/book.service';
import { LoanService } from '../../services/loan.service';

interface BookDetails {
  isbn: string;
  author: string;
  title: string;
  volume: string;
  publicationYear: string;
  notes: string;
  bookConditionDelivery: string;
  bookId: string;
}

const loanSchema = z.object({
  user: z.object({
    id: z.string(),
    cpf: z.string().min(11, 'CPF inválido'),
    name: z.string().optional(),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    status: z.string().optional(),
    birthDate: z.string().optional(),
  }),
  books: z.array(
    z.object({
      isbn: z.string().min(10, 'ISBN inválido').nonempty('Campo obrigatório'),
      title: z.string().optional(),
      author: z.string().optional(),
      volume: z.string().optional(),
      publicationYear: z.string().optional(),
      notes: z.string().optional(),
      bookConditionDelivery: z.string().nonempty('Campo obrigatório'),
      bookId: z.string(),
    }),
  ),
});

export default function EmprestimoRegister() {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loanSchema),
    defaultValues: {
      user: {
        cpf: '',
        name: '',
        email: '',
        phoneNumber: '',
        birthDate: '',
        id: '',
      },
      books: [] as BookDetails[],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'books',
  });

  const readerCpf = watch('user.cpf');
  const books = watch('books');

  const addBook = () => {
    append({
      isbn: '',
      title: '',
      author: '',
      volume: '',
      publicationYear: '',
      notes: '',
      bookConditionDelivery: '',
      bookId: '',
    });
  };

  const onGetReader = useCallback(async () => {
    try {
      const reader = await ReaderService.getReaderByCpf(readerCpf);
      setValue('user.id', reader.id);
      setValue('user.email', reader.email);
      setValue('user.name', reader.name);
      setValue('user.phoneNumber', reader.phoneNumber);
      setValue(
        'user.birthDate',
        new Date(reader.birtDate).toLocaleDateString('pt-BR'),
      );
    } catch (error) {
      console.log('EmprestimoRegister - onGetReader: ', error);
    }
  }, [readerCpf, setValue]);

  const onGetBook = useCallback(
    async (index: number, isbn: string) => {
      try {
        const book = await BookService.getBookByIsbn(isbn);
        setValue(`books.${index}.title`, book.title);
        setValue(`books.${index}.author`, book.author);
        setValue(`books.${index}.publicationYear`, book.publicationYear);
        setValue(`books.${index}.volume`, book.volume);
        setValue(`books.${index}.notes`, book.notes ?? '');
        setValue(`books.${index}.bookId`, book.id);
      } catch (error) {
        console.error('mprestimoRegister - onGetReader: ', error);
      }
    },
    [setValue],
  );

  const onSubmit = async (values: z.infer<typeof loanSchema>) => {
    try {
      const { user, books: allBooks } = values;

      const loanPromises = allBooks.map(({ bookId, bookConditionDelivery }) =>
        LoanService.createLoan({
          bookId,
          readerId: user.id,
          bookConditionDelivery: bookConditionDelivery || 'Perfeitas condições',
          observation: '',
        }),
      );

      await Promise.all(loanPromises);

      alert('Empréstimo realizado com sucesso');
    } catch (error) {
      console.log('EmprestimoRegister - onSubmit: ', error);
    } finally {
      reset();
    }
  };

  useEffect(() => {
    const cpfIsComplete = readerCpf.length === 11;
    if (cpfIsComplete) {
      onGetReader();
    }
  }, [readerCpf, onGetReader]);

  useEffect(() => {
    books.forEach((book, index) => {
      const cleanIsbn = book.isbn.replace(/[^0-9Xx]/g, '');
      if (cleanIsbn.length === 10 || cleanIsbn.length === 13) {
        onGetBook(index, book.isbn);
      }
    });
  }, [books.map((book) => book.isbn).join(','), onGetBook, books]);

  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb>
          <Link to="/books" style={{ color: 'white', fontWeight: '500' }}>
            LIVROS
          </Link>
        </Breadcrumb>
        <FormSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <h2>Cadastro de Empréstimo</h2>
          <FormWrapper
            onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
          >
            <FormRow>
              <FormField>
                <label>
                  CPF <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  {...register('user.cpf')}
                  placeholder="000.000.000-00"
                />
                {errors.user?.cpf && <span>{errors.user?.cpf.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Nome</label>
                <input type="text" {...register('user.name')} disabled />
              </FormField>
              <FormField>
                <label>Email</label>
                <input type="text" {...register('user.email')} disabled />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Telefone</label>
                <input type="text" {...register('user.phoneNumber')} disabled />
              </FormField>
              <FormField>
                <label>Data de nascimento</label>
                <input type="text" {...register('user.birthDate')} disabled />
              </FormField>
            </FormRow>

            {fields.map((field, index) => (
              <div
                key={field.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <FormRow>
                  <FormField
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        alignSelf: 'end',
                      }}
                      onClick={() => remove(index)}
                      type="button"
                    >
                      <IoMdClose size={20} color="red" />
                    </button>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label>
                        ISBN <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        {...register(`books.${index}.isbn`)}
                        placeholder="ISBN"
                      />
                      {errors?.books?.[index]?.isbn && (
                        <span>{errors?.books?.[index]?.isbn?.message}</span>
                      )}
                    </div>
                  </FormField>
                  <FormField>
                    <label>Título</label>
                    <input
                      type="text"
                      {...register(`books.${index}.title`)}
                      disabled
                    />
                  </FormField>
                  <FormField>
                    <label>Autor</label>
                    <input
                      type="text"
                      {...register(`books.${index}.author`)}
                      disabled
                    />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField />
                  <FormField>
                    <label>Volume</label>
                    <input
                      type="text"
                      {...register(`books.${index}.volume`)}
                      disabled
                    />
                  </FormField>
                  <FormField>
                    <label>Ano de publicação</label>
                    <input
                      type="text"
                      {...register(`books.${index}.publicationYear`)}
                      disabled
                    />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField />
                  <FormField style={{ flex: '2.09' }}>
                    <label>Observações</label>
                    <input
                      type="text"
                      {...register(`books.${index}.notes`)}
                      disabled
                    />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField />
                  <FormField style={{ flex: '2.09' }}>
                    <label>
                      Condição do livro no empréstimo{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </label>
                    <textarea
                      {...register(`books.${index}.bookConditionDelivery`)}
                    />
                    {errors?.books?.[index]?.bookConditionDelivery && (
                      <span>
                        {errors?.books?.[index]?.bookConditionDelivery?.message}
                      </span>
                    )}
                  </FormField>
                </FormRow>

                <hr />
              </div>
            ))}

            {books.length < 3 && (
              <ButtonWrapper style={{ marginBlock: '2rem' }}>
                <Button
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px dashed #007bff',
                    color: '#007bff',
                    padding: '0.8rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    textAlign: 'center',
                    width: '100%',
                  }}
                  title="Adicionar Livro"
                  onClick={addBook}
                />
              </ButtonWrapper>
            )}

            <ButtonWrapper>
              <Button
                title="CANCELAR"
                type="button"
                onClick={() => navigate('/books')}
              />
              <Button title="CONFIRMAR" type="submit" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
