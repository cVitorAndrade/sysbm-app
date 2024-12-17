import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Container, Content, ListItem, ListWrapper, Actions } from './styles';
import Breadcrumb from '../../../components/Breadcrumb';
import SearchBar from '../../../components/SearchBar';
import Scrollable from '../../../components/ScrollLabs';
import Header from '../../../components/Header';
import { Link } from 'react-router-dom';

export default function ListBooks() {
  const allReaders = Array(20).fill({
    name: 'Nome do livro',
    email: 'Numero Registro: 00000; Autor: Autor; Editora: Editora',
    phone: 'Vol: 01; Exemplares: 01',
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
        <h2>Acervo de livros</h2>
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
                  <Link to="/book/edit">
                    <button type="button" className="edit">
                      <FaEdit size={18} />
                    </button>
                  </Link>
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
