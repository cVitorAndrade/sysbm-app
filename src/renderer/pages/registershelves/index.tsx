import { useNavigate } from 'react-router-dom';
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
import { useState } from 'react';

export default function BookshelvesRegister() {
  const navigate = useNavigate();
  const [shelves, setShelves] = useState([{ id: 1, name: '' }]);

  const addShelf = () => {
    setShelves((prev) => [...prev, { id: prev.length + 1, name: '' }]);
  };

  const handleShelfChange = (id: number, value: string) => {
    setShelves((prev) =>
      prev.map((shelf) =>
        shelf.id === id ? { ...shelf, name: value } : shelf,
      ),
    );
  };

  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <FormSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <h2>Cadastro de livros</h2>
          <FormWrapper>
            <FormRow>
              <FormField>
                <label>Estante</label>
                <input type="text" placeholder="Exemplo" />
              </FormField>
              <FormField>
                <label>Descrição</label>
                <input type="text" placeholder="Exemplo" />
              </FormField>
            </FormRow>

            {shelves.map((shelf) => (
              <FormRow key={shelf.id}>
                <FormField>
                  <label>Prateleira {shelf.id}</label>
                  <input
                    type="text"
                    placeholder={`Prateleira ${shelf.id}`}
                    value={shelf.name}
                    onChange={(e) =>
                      handleShelfChange(shelf.id, e.target.value)
                    }
                  />
                </FormField>
              </FormRow>
            ))}

            <button
              onClick={addShelf}
              type="button"
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
              <Button title="CANCELAR" onClick={() => navigate('/books')} />
              <Button title="CADASTRAR" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
