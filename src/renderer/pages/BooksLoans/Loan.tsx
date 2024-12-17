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

// Mock de dados dos livros
const mockBooks = {
  '123456': {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    volume: 'Volume 1',
    estante: 'A-12',
  },
  '654321': {
    titulo: '1984',
    autor: 'George Orwell',
    volume: 'Edição Especial',
    estante: 'B-5',
  },
  '111222': {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    volume: 'Volume Único',
    estante: 'C-7',
  },
};

export default function EmprestimoRegister() {
  // Estado inicial do formulário
  const initialFormData = {
    codLivro: '',
    cpf: '',
    nome: '',
    titulo: '',
    autor: '',
    volume: '',
    estante: '',
    dataEmprestimo: '',
    dataDevolucao: '',
    observacao: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  // Atualiza o estado ao alterar campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Busca os dados do livro no mock com base no código
  const handleBlur = () => {
    const bookData = mockBooks[formData.codLivro];
    if (bookData) {
      setFormData((prev) => ({
        ...prev,
        titulo: bookData.titulo,
        autor: bookData.autor,
        volume: bookData.volume,
        estante: bookData.estante, // Incluindo a estante
      }));
    } else {
      alert('Livro não encontrado! Verifique o código.');
      setFormData((prev) => ({
        ...prev,
        titulo: '',
        autor: '',
        volume: '',
        estante: '',
      }));
    }
  };

  // Submete o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do Empréstimo:', formData);
    alert('Empréstimo cadastrado com sucesso!');
  };

  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <FormSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <h2>Cadastro de Empréstimo</h2>
          <FormWrapper onSubmit={handleSubmit}>
            <FormRow>
              <FormField>
                <label>Código do Livro</label>
                <input
                  type="text"
                  name="codLivro"
                  placeholder="123456"
                  value={formData.codLivro}
                  onChange={handleChange}
                  onBlur={handleBlur} // Busca os dados do livro ao sair do campo
                />
              </FormField>
              <FormField>
                <label>CPF</label>
                <input
                  type="text"
                  name="cpf"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Título</label>
                <input
                  type="text"
                  name="titulo"
                  placeholder="Título do livro"
                  value={formData.titulo}
                  disabled
                />
              </FormField>
              <FormField>
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome do Leitor"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Autor</label>
                <input
                  type="text"
                  name="autor"
                  placeholder="Nome do Autor"
                  value={formData.autor}
                  disabled
                />
              </FormField>
              <FormField>
                <label>Volume</label>
                <input
                  type="text"
                  name="volume"
                  placeholder="Volume do livro"
                  value={formData.volume}
                  disabled
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Estante</label>
                <input
                  type="text"
                  name="estante"
                  placeholder="Posição na Estante"
                  value={formData.estante}
                  disabled
                />
              </FormField>
              <FormField>
                <label>Data de Empréstimo</label>
                <input
                  type="date"
                  name="dataEmprestimo"
                  value={formData.dataEmprestimo}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Data de Devolução</label>
                <input
                  type="date"
                  name="dataDevolucao"
                  value={formData.dataDevolucao}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <label>Observação</label>
                <input
                  type="text"
                  name="observacao"
                  placeholder="Observações adicionais"
                  value={formData.observacao}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>

            <ButtonWrapper>
              <Button
                title="CANCELAR"
                onClick={() => setFormData(initialFormData)}
              />
              <Button title="CONFIRMAR" type="submit" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
