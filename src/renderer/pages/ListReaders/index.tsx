import React, { useState } from 'react';
import { Container, Content, ListItem, ListWrapper, Actions } from './styles';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Breadcrumb from '../../../components/Breadcrumb';
import SearchBar from '../../../components/SearchBar';
import Scrollable from '../../../components/ScrollLabs';
import { Link } from 'react-router-dom';

export default function ListReaders() {
  const allReaders = Array(20).fill({
    name: 'Nome do leitor',
    email: 'Exemplo@email.com',
    phone: '(88) 99225-3090',
  });

  const [filteredReaders, setFilteredReaders] = useState(allReaders);

  const handleSearch = (query: string) => {
    const filtered = allReaders.filter((reader) =>
      reader.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredReaders(filtered);
  };

  return (
    <Container>
      <Content>
        <Breadcrumb />
        <SearchBar onSearch={handleSearch} />
        <h2>Lista de Leitores</h2>
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
                  <Link to={'/ReadersEdit'}>
                    <button className="edit">
                      <FaEdit size={18} />
                    </button>
                   </Link>
                  <button className="delete">
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
