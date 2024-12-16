import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Container, Content, ListItem, ListWrapper, Actions } from './styles';
import Breadcrumb from '../../../components/Breadcrumb';
import SearchBar from '../../../components/SearchBar';
import Scrollable from '../../../components/ScrollLabs';
import Header from '../../../components/Header';

export default function ListBookshelves() {
  const allReaders = Array(20).fill({
    name: 'Estante A',
    email: 'Prateleiras: 5',
    phone: 'Descrição',
  });

  const [filteredReaders, setFilteredReaders] = useState(allReaders);

  const handleSearch = (query: string) => {
    const filtered = allReaders.filter((reader) =>
      reader.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredReaders(filtered);
  };

  return (
    <Container>
      {/* <Header /> */}
      <Content>
        <Breadcrumb style={{ color: 'black' }} />
        <SearchBar onSearch={handleSearch} />
        <h2>Lista de estantes</h2>
        <Scrollable>
          <ListWrapper>
            {filteredReaders.map((reader, index) => (
              <ListItem key={index}>
                <div className="info">
                  <strong>{reader.name}</strong>
                  <p>{reader.email}</p>
                  <p>{reader.phone}</p>
                </div>
                <Actions>
                  <button type="button" className="edit">
                    <FaEdit size={18} />
                  </button>
                  <button type="button" className="delete">
                    <FaTrash size={18} />
                  </button>
                </Actions>
              </ListItem>
            ))}
          </ListWrapper>
        </Scrollable>
      </Content>
    </Container>
  );
}
