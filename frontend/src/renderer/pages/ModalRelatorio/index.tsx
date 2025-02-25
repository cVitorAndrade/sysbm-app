// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalRelatorio({ isOpen, onClose }: ModalProps) {
  const navigate = useNavigate();

  const handleGenerateReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const startDate = formData.get('startDate') as string;
    const endDate = formData.get('endDate') as string;
    const theme = formData.get('theme') as string;

    if (!startDate || !endDate || !theme) {
      alert('Por favor, preencha todos os campos antes de gerar o relatório.');
      return;
    }

    try {
      // Salvar os dados no localStorage
      localStorage.setItem(
        'relatorioParams',
        JSON.stringify({ startDate, endDate, theme }),
      );

      console.log('Relatório salvo no localStorage:', {
        startDate,
        endDate,
        theme,
      });

      // Fechar o modal antes de redirecionar
      onClose();

      // Redirecionar para a página Gerar Relatório
      navigate('/gerar-relatorio');
    } catch (error) {
      console.error('Erro ao salvar os dados do relatório:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h2>RELATÓRIO | GERAR</h2>
          <button type="button" onClick={onClose} aria-label="Fechar">
            X
          </button>
        </ModalHeader>
        <ModalBody>
          <p>Relatório detalhado para análise de dados.</p>
          <form onSubmit={handleGenerateReport}>
            <label htmlFor="startDate">Data inicial:</label>
            <input id="startDate" name="startDate" type="date" required />

            <label htmlFor="endDate">Data de final:</label>
            <input id="endDate" name="endDate" type="date" required />

            <label htmlFor="theme">Selecione o tema:</label>
            <select id="theme" name="theme" defaultValue="" required>
              <option value="" disabled>
                Nenhum...
              </option>
              <option value="tema2">Livros mais lidos</option>
              <option value="tema5">Gêneros mais lidos</option>
            </select>

            <ModalFooter>
              <button type="submit">Gerar Relatório</button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
}
