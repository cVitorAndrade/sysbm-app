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

export default function BookEdit() {
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
        <Breadcrumb />
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
      </Content>
    </Container>
  );
}
