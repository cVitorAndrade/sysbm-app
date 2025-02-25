import React, { useState } from 'react';
import fullLogo from '../../../../assets/full-logo.png';
import Breadcrumb from '../../../components/Breadcrumb';
import Button from '../../../components/Button';
import ModalRelatorio from '../ModalRelatorio'; // Importando o modal
import Header from '../../../components/Header';
import {
  Container,
  Content,
  NavigationSection,
  NavigationWrapper,
} from './styles';

export default function Relatorio() {
  const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar o modal

  const handleOpenModal = () => {
    setModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Fecha o modal
  };

  const handleGenerateReport = (data: {
    startDate: string;
    endDate: string;
    theme: string;
  }) => {
    // eslint-disable-next-line no-console
    console.log('Dados para o relatório:', data);
    setModalOpen(false); // Fecha o modal após gerar o relatório
  };

  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <NavigationSection>
          <img src={fullLogo} alt="Logo SysBM" />

          <NavigationWrapper>
            <Button
              title="GERAR RELATÓRIOS"
              onClick={handleOpenModal}
              type="button"
            />
          </NavigationWrapper>
        </NavigationSection>
      </Content>

      {/* Modal de Gerar Relatório */}
      <ModalRelatorio
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onGenerate={handleGenerateReport}
      />
    </Container>
  );
}
