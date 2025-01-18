import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

export default function EditReaders() {
  const { state } = useLocation(); // Captura os dados enviados pela rota
  const navigate = useNavigate();

  // Dados iniciais do formulário (usando os dados passados na navegação)
  const [formData, setFormData] = useState({
    name: state?.reader?.name || '',
    email: state?.reader?.email || '',
    phone: state?.reader?.phone || '',
    cpf: state?.reader?.cpf || '',
    address: state?.reader?.address || '',
    enrollment: state?.reader?.enrollment || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log('Dados atualizados:', formData);
    navigate('/readers'); // Volta para a listagem
  };

  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb path={[]} />
        <FormSection>
          <h2>Editar Leitor</h2>
          <FormWrapper>
            <FormRow>
              <FormField>
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Exemplo"
                />
              </FormField>
              <FormField>
                <label>Telefone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(88) 99999-9999"
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>CPF</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="00000000"
                />
              </FormField>
              <FormField>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemplo@email.com"
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Endereço</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Exemplo..."
                />
              </FormField>
              <FormField>
                <label>Matrícula</label>
                <input
                  type="text"
                  name="enrollment"
                  value={formData.enrollment}
                  onChange={handleChange}
                  placeholder="0000000"
                />
              </FormField>
            </FormRow>

            <ButtonWrapper>
              <Button title="CANCELAR" onClick={() => navigate('/Readers')} />
              <Button title="CONFIRMAR" type="submit" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
