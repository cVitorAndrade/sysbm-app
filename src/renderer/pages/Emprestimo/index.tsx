/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
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

export default function Emprestimo() {
  // Estado inicial
  const initialFormData = {
    codLivro: '',
    cpf: '',
    titulo: '',
    nome: '',
    dataEmprestimo: '',
    dataDevolucao: '',
    observacao: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Empréstimo realizado com sucesso!');
  };

  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb path={['HOME', 'LIVROS', 'EMPRÉSTIMO']} />
        <FormSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <h2>Cadastro de Empréstimo</h2>
          <FormWrapper onSubmit={handleSubmit}>
            <FormRow>
              <FormField>
                <label htmlFor="codLivro">Código do Livro</label>
                <input
                  id="codLivro"
                  name="codLivro"
                  type="text"
                  placeholder="131231231231"
                  value={formData.codLivro}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="123.456.789-00"
                  value={formData.cpf}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label htmlFor="titulo">Título</label>
                <input
                  id="titulo"
                  name="titulo"
                  type="text"
                  placeholder="Exemplo"
                  value={formData.titulo}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Nome do leitor"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label htmlFor="dataEmprestimo">Data de Empréstimo</label>
                <input
                  id="dataEmprestimo"
                  name="dataEmprestimo"
                  type="date"
                  value={formData.dataEmprestimo}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <label htmlFor="dataDevolucao">Data de Devolução</label>
                <input
                  id="dataDevolucao"
                  name="dataDevolucao"
                  type="date"
                  value={formData.dataDevolucao}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label htmlFor="observacao">Observação</label>
                <input
                  id="observacao"
                  name="observacao"
                  type="text"
                  placeholder="Observação adicional"
                  value={formData.observacao}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>

            <ButtonWrapper>
              <Button
                title="CANCELAR"
                onClick={() => setFormData(initialFormData)}
                type="button"
                // eslint-disable-next-line react/jsx-no-comment-textnodes
              />
              // eslint-disable-next-line react/jsx-no-bind, react/jsx-no-bind
              <Button
                title="EMPRESTAR"
                type="submit"
                // eslint-disable-next-line react/jsx-no-bind
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
