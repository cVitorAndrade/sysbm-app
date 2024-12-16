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

export default function BookRegister() {
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
              <Button title="CANCELAR" />
              <Button title="CADASTRAR" />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
