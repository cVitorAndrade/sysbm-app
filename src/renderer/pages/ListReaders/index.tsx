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

export default function ListReaders() {
  const [readers, setReaders] = useState<IReader[]>([]);

  const [filteredReaders, setFilteredReaders] = useState<IReader[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

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

  useEffect(() => {
    const onGetReaders = async () => {
      try {
        const allReaders = await ReaderService.getAllReaders();
        setReaders(allReaders);
        setFilteredReaders(allReaders);
      } catch (error) {
        console.log('ListReaders - onGetReaders: ', error);
      }
    };

    onGetReaders();
  }, []);

  return (
    <Container>
      <Content>
        <Breadcrumb />
        <SearchBar onSearch={handleSearch} />
        <h2>Lista de Leitores</h2>
        <Scrollable>
          <ListWrapper>
            {paginatedReaders.map((reader) => (
              <ListItem key={reader.id}>
                <div className="info">
                  <strong>{reader.name}</strong>
                  <p>Email: {reader.email}</p>
                  <p>Telefone: {reader.phoneNumber}</p>
                  <p>CPF: {reader.cpf}</p>
                </div>
                <Actions>
                  <Link to="/ReadersEdit">
                    <button className="edit" type="button">
                      <FaEdit size={18} />
                    </button>
                  </Link>
                  <button className="delete" type="button">
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
    </Container>
  );
}
