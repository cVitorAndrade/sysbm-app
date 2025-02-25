import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { Container, Content, ListItem, ListWrapper, Actions } from './styles';
import Breadcrumb from '../../../components/Breadcrumb';
import SearchBar from '../../../components/SearchBar';
import Scrollable from '../../../components/ScrollLabs';
import { IReader } from '../../interfaces/IReader';
import { ReaderService } from '../../services/reader.service';
import { DeleteItemModal } from '../../../components/DeleteItemModal';
import { useToast } from '../../hooks/useToast';

export default function ListReaders() {
  const { successMessage, errorMessage } = useToast();

  const [readers, setReaders] = useState<IReader[]>([]);

  const [filteredReaders, setFilteredReaders] = useState<IReader[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const [selectedReaderIdToDelete, setSelectedReaderIdToDelete] =
    useState<string>('');
  const [showDeleteReaderModal, setShowDeleteReaderModal] =
    useState<boolean>(false);

  const onOpenDeleteReaderModal = (id: string) => {
    setSelectedReaderIdToDelete(id);
    setShowDeleteReaderModal(true);
  };

  const onCloseDeleteReaderModal = () => {
    setShowDeleteReaderModal(false);
  };

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    if (normalizedQuery === '') {
      setFilteredReaders(readers);
      return;
    }

    const filtered = readers.filter((reader) =>
      Object.entries(reader)
        .filter(
          ([key]) =>
            key === 'name' ||
            key === 'cpf' ||
            key === 'email' ||
            key === 'phoneNumber',
        )
        .some(
          ([_, value]) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(normalizedQuery),
        ),
    );

    setFilteredReaders(filtered);
    setPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedReaders = filteredReaders.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const onGetReaders = async () => {
    try {
      const allReaders = await ReaderService.getAllReaders();
      setReaders(allReaders);
      setFilteredReaders(allReaders);
      console.log({ readers });
    } catch (error) {
      console.log('ListReaders - onGetReaders: ', error);
    }
  };

  useEffect(() => {
    onGetReaders();
  }, []);

  const onDeleteReader = async () => {
    try {
      await ReaderService.deleteReaderById(selectedReaderIdToDelete);
      successMessage({ message: 'O leitor foi excluído com sucesso' });
      await onGetReaders();
    } catch (error) {
      errorMessage({
        message: 'Ocorreu um erro ao tentar excluir. Tente novamente.',
      });
      console.log('ListBooks - onDeleteBook: ', error);
    }
  };
  

  return (
    <Container>
      <Content>
        <Breadcrumb style={{ color: 'black' }}>
          <Link to="/readers" style={{ color: 'black', fontWeight: '500' }}>
            LEITORES
          </Link>
        </Breadcrumb>
        <SearchBar onSearch={handleSearch} />
        <h2>Lista de Leitores</h2>
        <Scrollable>
          <ListWrapper>
            {paginatedReaders
              .filter(({ status }) => status !== 'disabled')
              .map((reader) => (
                <ListItem key={reader.id}>
                  <div className="info">
                    <strong>{reader.name}</strong>
                    <p>Email: {reader.email}</p>
                    <p>Telefone: {reader.phoneNumber}</p>
                    <p>CPF: {reader.cpf}</p>
                  </div>
                  <Actions>
                    <Link to={`/ReadersEdit?cpf=${reader.cpf}`}>
                      <button className="edit" type="button">
                        <FaEdit size={18} />
                      </button>
                    </Link>
                    <button
                      onClick={() => onOpenDeleteReaderModal(reader.id)}
                      className="delete"
                      type="button"
                    >
                      <FaTrash size={18} />
                    </button>
                  </Actions>
                </ListItem>
              ))}
          </ListWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              marginTop: '16px',
            }}
          >
            <Pagination
              count={Math.ceil(filteredReaders.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              size="large"
              sx={{ '& .MuiPaginationItem-root': { fontSize: '1.5rem' } }}
            />
          </div>
        </Scrollable>
      </Content>

      {showDeleteReaderModal && (
        <DeleteItemModal
          title="Deseja excluir esse leitor"
          description="Você está prestes a deletar esse leitor. Isso acarretará na sua remoção do sistema. Não poderão ser feitos empréstimos ao mesmo. Deseja continuar?"
          onClose={onCloseDeleteReaderModal}
          onConfirm={onDeleteReader}
        />
      )}
    </Container>
  );
}
