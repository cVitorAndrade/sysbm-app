import { z } from 'zod';
import { useForm } from 'react-hook-form';
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
import { AddressService } from '../../services/address.service';
import { ReaderService } from '../../services/reader.service';

const createUserSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  name: z.string().min(1, 'Campo obrigatório'),
  cpf: z.string().min(1, 'Campo obrigatório'),
  phoneNumber: z.string().min(1, 'Campo obrigatório'),
  birtDate: z.coerce.date({ message: 'Data inválida' }),
  street: z.string().min(1, 'Campo obrigatório'),
  number: z.string().min(1, 'Campo obrigatório'),
  city: z.string().min(1, 'Campo obrigatório'),
  postalCode: z.string().min(1, 'Campo obrigatório'),
  neighborhood: z.string().min(1, 'Campo obrigatório'),
});

export default function ReaderRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      email: '',
      name: '',
      cpf: '',
      phoneNumber: '',
      birtDate: new Date().toISOString().split('T')[0],
      city: '',
      street: '',
      number: '',
      postalCode: '',
      neighborhood: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof createUserSchema>) => {
    try {
      const {
        email,
        name,
        cpf,
        phoneNumber,
        birtDate,
        city,
        neighborhood,
        number,
        postalCode,
        street,
      } = values;

      const address = await AddressService.createAddress({
        city,
        neighborhood,
        number,
        postalCode,
        street,
      });

      await ReaderService.createReader({
        addressId: address.id,
        birtDate,
        cpf,
        email,
        name,
        phoneNumber,
        status: 'active',
      });

      alert('Leitor cadastrado com sucesso');
    } catch (error) {
      console.log('Register Reader - OnSubmit: ', error);
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
          <h2>Cadastro de Leitores</h2>
          <FormWrapper
            onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
          >
            <h3>Informações do leitor</h3>
            <FormRow>
              <FormField>
                <label>Nome Completo</label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Exemplo"
                />
                {errors.name && <span>{errors.name.message}</span>}
              </FormField>
              <FormField>
                <label>Telefone</label>
                <input
                  type="text"
                  {...register('phoneNumber')}
                  placeholder="(88) 99999-9999"
                />
                {errors.phoneNumber && (
                  <span>{errors.phoneNumber.message}</span>
                )}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>CPF</label>
                <input
                  type="text"
                  {...register('cpf')}
                  placeholder="00000000"
                />
                {errors.cpf && <span>{errors.cpf.message}</span>}
              </FormField>
              <FormField>
                <label>Email</label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Exemplo@email.com"
                />
                {errors.email && <span>{errors.email.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Data de Nascimento</label>
                <input type="date" {...register('birtDate')} />
                {errors.birtDate && <span>{errors.birtDate.message}</span>}
              </FormField>
            </FormRow>

            <hr />

            <h3>Endereço</h3>

            <FormRow>
              <FormField>
                <label>Rua</label>
                <input
                  type="text"
                  {...register('street')}
                  placeholder="Exemplo..."
                />
                {errors.street && <span>{errors.street.message}</span>}
              </FormField>
              <FormField>
                <label>Número</label>
                <input type="text" {...register('number')} placeholder="0000" />
                {errors.number && <span>{errors.number.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Cidade</label>
                <input type="text" {...register('city')} placeholder="Cidade" />
                {errors.city && <span>{errors.city.message}</span>}
              </FormField>
              <FormField>
                <label>CEP</label>
                <input
                  type="text"
                  {...register('postalCode')}
                  placeholder="00000-000"
                />
                {errors.postalCode && <span>{errors.postalCode.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Bairro</label>
                <input
                  type="text"
                  {...register('neighborhood')}
                  placeholder="Bairro"
                />
                {errors.neighborhood && (
                  <span>{errors.neighborhood.message}</span>
                )}
              </FormField>
            </FormRow>

            <ButtonWrapper>
              <Button type="button" title="CANCELAR" />
              <Button type="submit" title="CADASTRAR" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
