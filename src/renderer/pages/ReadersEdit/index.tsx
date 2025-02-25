import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { AddressService } from '../../services/address.service';
import { ReaderService } from '../../services/reader.service';

import fullLogo from '../../../../assets/full-logo.png';

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

export default function EditReaders() {
  const [searchParams] = useSearchParams();

  const [userIdGlobal, setUserIdGlobal] = useState<string>('');
  const [addressGlobal, setAddressGlobal] = useState<string>('');

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
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

      // const address = await AddressService.createAddress({
      //   city,
      //   neighborhood,
      //   number,
      //   postalCode,
      //   street,
      // });

      await ReaderService.update(userIdGlobal, {
        addressId: addressGlobal,
        birtDate,
        cpf,
        email,
        name,
        phoneNumber,
        status: 'active',
        readerId: userIdGlobal,
      });

      alert('Leitor atualizado com sucesso');
    } catch (error) {
      console.log('Register Reader - OnSubmit: ', error);
    } finally {
      reset();
    }
  };

  useEffect(() => {
    const onGetReaderDetails = async () => {
      try {
        const userIdParam = searchParams.get('cpf');
        if (!userIdParam) return;

        const user = await ReaderService.getReaderByCpf(userIdParam);
        const {
          addressId,
          birtDate,
          cpf,
          createdAt,
          email,
          id,
          name,
          phoneNumber,
        } = user;

        setUserIdGlobal(id);
        setAddressGlobal(addressGlobal);

        setValue('birtDate', new Date(birtDate).toISOString().split('T')[0]);
        setValue('cpf', cpf);
        setValue('email', email);
        setValue('name', name);
        setValue('phoneNumber', phoneNumber);

        setValue('city', 'Quixeramobim');
        setValue('neighborhood', 'Bairro');
        setValue('street', 'Rua D');
        setValue('number', '41');
        setValue('postalCode', '63800000');
      } catch (error) {
        console.log('BookRegister - onGetReaderDetails: ', error);
      }
    };

    onGetReaderDetails();
  }, []);
  return (
    // <Container>
    //   <Header />
    //   <Content>
    //     <Breadcrumb style={{ color: 'white' }}>
    //       <Link to="/readers" style={{ color: 'white', fontWeight: '500' }}>
    //         LEITORES
    //       </Link>
    //     </Breadcrumb>
    //     <FormSection>
    //       <h2>Editar Leitor</h2>
    //       <FormWrapper>
    //         <FormRow>
    //           <FormField>
    //             <label>Nome Completo</label>
    //             <input
    //               type="text"
    //               name="name"
    //               value={formData.name}
    //               onChange={handleChange}
    //               placeholder="Exemplo"
    //             />
    //           </FormField>
    //           <FormField>
    //             <label>Telefone</label>
    //             <input
    //               type="text"
    //               name="phone"
    //               value={formData.phone}
    //               onChange={handleChange}
    //               placeholder="(88) 99999-9999"
    //             />
    //           </FormField>
    //         </FormRow>

    //         <FormRow>
    //           <FormField>
    //             <label>CPF</label>
    //             <input
    //               type="text"
    //               name="cpf"
    //               value={formData.cpf}
    //               onChange={handleChange}
    //               placeholder="00000000"
    //             />
    //           </FormField>
    //           <FormField>
    //             <label>Email</label>
    //             <input
    //               type="email"
    //               name="email"
    //               value={formData.email}
    //               onChange={handleChange}
    //               placeholder="exemplo@email.com"
    //             />
    //           </FormField>
    //         </FormRow>

    //         <FormRow>
    //           <FormField>
    //             <label>Endereço</label>
    //             <input
    //               type="text"
    //               name="address"
    //               value={formData.address}
    //               onChange={handleChange}
    //               placeholder="Exemplo..."
    //             />
    //           </FormField>
    //           <FormField>
    //             <label>Matrícula</label>
    //             <input
    //               type="text"
    //               name="enrollment"
    //               value={formData.enrollment}
    //               onChange={handleChange}
    //               placeholder="0000000"
    //             />
    //           </FormField>
    //         </FormRow>

    //         <ButtonWrapper>
    //           <Button title="CANCELAR" onClick={() => navigate('/Readers')} />
    //           <Button title="CONFIRMAR" type="submit" />
    //         </ButtonWrapper>
    //       </FormWrapper>
    //     </FormSection>
    //   </Content>
    // </Container>

    <Container>
      <Header />
      <Content>
        <Breadcrumb style={{ color: 'white' }}>
          <Link to="/readers" style={{ color: 'white', fontWeight: '500' }}>
            LEITORES
          </Link>
        </Breadcrumb>
        <FormSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <h2>Editar de Leitor</h2>
          <FormWrapper
            onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
          >
            <h3>Informações do leitor</h3>
            <FormRow>
              <FormField>
                <label>
                  Nome Completo <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Exemplo"
                />
                {errors.name && <span>{errors.name.message}</span>}
              </FormField>
              <FormField>
                <label>
                  Telefone <span style={{ color: 'red' }}>*</span>
                </label>
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
                <label>
                  CPF<span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  {...register('cpf')}
                  placeholder="00000000"
                />
                {errors.cpf && <span>{errors.cpf.message}</span>}
              </FormField>
              <FormField>
                <label>
                  Email <span style={{ color: 'red' }}>*</span>
                </label>
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
                <label>
                  Data de Nascimento <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="date" {...register('birtDate')} />
                {errors.birtDate && <span>{errors.birtDate.message}</span>}
              </FormField>
            </FormRow>

            <hr />

            <h3>Endereço</h3>

            <FormRow>
              <FormField>
                <label>
                  Rua <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  {...register('street')}
                  placeholder="Exemplo..."
                />
                {errors.street && <span>{errors.street.message}</span>}
              </FormField>
              <FormField>
                <label>
                  Número <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="text" {...register('number')} placeholder="0000" />
                {errors.number && <span>{errors.number.message}</span>}
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>
                  Cidade <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="text" {...register('city')} placeholder="Cidade" />
                {errors.city && <span>{errors.city.message}</span>}
              </FormField>
              <FormField>
                <label>
                  CEP <span style={{ color: 'red' }}>*</span>
                </label>
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
                <label>
                  Bairro <span style={{ color: 'red' }}>*</span>
                </label>
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
              <Button
                type="button"
                title="CANCELAR"
                onClick={() => navigate('/readers')}
              />
              <Button type="submit" title="CADASTRAR" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
