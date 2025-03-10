import booksIcon from '../../../../assets/books-icon.png';
import readerIcon from '../../../../assets/reader-icon.png';
import bookshelfIcon from '../../../../assets/bookshelf-icon.png';
import monthlyReportsIcon from '../../../../assets/monthly-reports-icon.png';
import logoutIcon from '../../../../assets/logout-icon.png';
import fullLogo from '../../../../assets/full-logo.png';
import Breadcrumb from '../../../components/Breadcrumb';

import Header from '../../../components/Header';
import {
  Container,
  Content,
  NavigationCard,
  NavigationCardWrapper,
  NavigationSection,
} from './styles';
import { useAuthStore } from '../store/authStore';

export default function Home() {
  const { onLogout } = useAuthStore();
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <NavigationSection>
          <img src={fullLogo} alt="" />

          <NavigationCardWrapper>
            <NavigationCard to="/books">
              <img src={booksIcon} alt="ícone de livros" />
              <h2>Livros</h2>
            </NavigationCard>
            <NavigationCard to="/readers">
              <img src={readerIcon} alt="ícone de livros" />
              <h2>Leitores</h2>
            </NavigationCard>
            <NavigationCard to="/bookshelves">
              <img src={bookshelfIcon} alt="ícone de livros" />
              <h2>Estantes</h2>
            </NavigationCard>
            <NavigationCard to="/Relatorio">
              <img src={monthlyReportsIcon} alt="ícone de livros" />
              <h2>Relatorio mensal</h2>
            </NavigationCard>
            <NavigationCard to="/login" onClick={() => onLogout()}>
              <img src={logoutIcon} alt="ícone de livros" />
              <h2>Finalizar sessão</h2>
            </NavigationCard>
          </NavigationCardWrapper>
        </NavigationSection>
      </Content>
    </Container>
  );
}
