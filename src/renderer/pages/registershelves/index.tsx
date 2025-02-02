import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { z } from 'zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { ShelfService } from '../../services/shelf.service';
import { BookshelfService } from '../../services/bookshelf.service';

const createBookShelfSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  color: z.string().min(1, 'Campo obrigatório'),
  description: z.string().optional(),
  shelves: z.array(
    z.object({
      number: z.string().min(1, 'Campo obrigatório'),
      letter: z.string().min(1, 'Campo obrigatório'),
    }),
  ),
});

export default function BookshelvesRegister() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createBookShelfSchema),
    defaultValues: {
      name: '',
      color: '',
      description: '',
      shelves: [{ number: '', letter: '' }],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'shelves',
  });

  const onSubmit = async ({
    color,
    name,
    shelves,
    description,
  }: z.infer<typeof createBookShelfSchema>) => {
    try {
      const bookshlef = await BookshelfService.createBookshelf({
        color,
        name,
        description,
      });

      const createShelves = shelves.map(({ letter, number }) =>
        ShelfService.createShelf({
          letter,
          number,
          bookShelfId: bookshlef.id,
        }),
      );

      await Promise.all(createShelves);

      alert('Estante cadastrada com sucesso');
    } catch (error) {
      console.log('RegisterShelves - OnSubmit: ', error);
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
                <label htmlFor="bookshelf-name">Estante</label>
                <input
                  id="bookshelf-name"
                  type="text"
                  {...register('name')}
                  placeholder="Exemplo"
                />
                {errors.name && <span>{errors.name.message}</span>}
              </FormField>
              <FormField>
                <label htmlFor="bookshelf-color">Cor da estante</label>
                <input
                  id="bookshelf-color"
                  type="text"
                  {...register('color')}
                  placeholder="Exemplo"
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <label htmlFor="bookshlef-description">Descrição</label>
                <input
                  id="bookshlef-description"
                  type="text"
                  {...register('description')}
                  placeholder="Exemplo"
                />
              </FormField>
            </FormRow>

            {fields.map((shelf, index) => (
              <FormRow key={shelf.id}>
                <FormField>
                  <label htmlFor={`shelf-number-${index + 1}`}>
                    Prateleira {index + 1}
                  </label>
                  <input
                    id={`shelf-number-${index + 1}`}
                    type="text"
                    {...register(`shelves.${index}.number`)}
                    placeholder={`Número da prateleira ${index + 1}`}
                  />
                  {errors.shelves?.[index]?.number && (
                    <span>{errors.shelves[index].number.message}</span>
                  )}
                </FormField>
                <FormField>
                  <label htmlFor={`shelf-letter-${index + 1}`}>Letra</label>
                  <input
                    id={`shelf-letter-${index + 1}`}
                    type="text"
                    {...register(`shelves.${index}.letter`)}
                    placeholder="Letra"
                  />
                  {errors.shelves?.[index]?.letter && (
                    <span>{errors.shelves[index].letter.message}</span>
                  )}
                </FormField>
              </FormRow>
            ))}

            <button
              type="button"
              onClick={() => append({ number: '', letter: '' })}
              style={{
                backgroundColor: 'transparent',
                border: '2px dashed #007bff',
                color: '#007bff',
                padding: '0.8rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              + Nova Prateleira
            </button>

            <ButtonWrapper>
              <Button
                type="button"
                title="CANCELAR"
                onClick={() => navigate('/books')}
              />
              <Button type="submit" title="CADASTRAR" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
