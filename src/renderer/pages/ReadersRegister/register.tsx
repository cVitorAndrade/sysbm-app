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

export default function ReaderRegister() {
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <FormSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <h2>Cadastro de Leitores</h2>
          <FormWrapper>
            <FormRow>
              <FormField>
                <label>Nome Completo</label>
                <input type="text" placeholder="Exemplo" />
              </FormField>
              <FormField>
                <label>Telefone</label>
                <input type="text" placeholder="(88) 99999-9999" />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>CPF</label>
                <input type="text" placeholder="00000000" />
              </FormField>
              <FormField>
                <label>Email</label>
                <input type="email" placeholder="Exemplo@email.com" />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <label>Endereço</label>
                <input type="text" placeholder="Exemplo..." />
              </FormField>
              <FormField>
                <label>Matrícula</label>
                <input type="text" placeholder="0000000" />
              </FormField>
            </FormRow>

            <ButtonWrapper>
              <Button title="CANCELAR" />
              <Button title="CADASTRAR"  />
            </ButtonWrapper>
          </FormWrapper>
        </FormSection>
      </Content>
    </Container>
  );
}
