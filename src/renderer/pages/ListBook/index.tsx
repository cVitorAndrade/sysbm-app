import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { Container, Content, ListItem, ListWrapper, Actions } from './styles';
import Breadcrumb from '../../../components/Breadcrumb';
import SearchBar from '../../../components/SearchBar';
import Scrollable from '../../../components/ScrollLabs';
import { IBook } from '../../interfaces/IBook';
import { BookService } from '../../services/book.service';

export default function ListBooks() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const onGetBooks = async () => {
      try {
        const allBooks = await BookService.getAllBooks();
        setBooks(allBooks);
        setFilteredBooks(allBooks);
      } catch (error) {
        console.log('ListBooks - onGetBooks: ', error);
      }
    };
    onGetBooks();
  }, []);

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    if (normalizedQuery === '') {
      setFilteredBooks(books);
      return;
    }

    const filtered = books.filter((book) =>
      Object.entries(book)
        .filter(
          ([key]) =>
            key === 'author' ||
            key === 'available' ||
            key === 'copies' ||
            key === 'title' ||
            key === 'publisher',
        )
        .some(
          ([_, value]) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(normalizedQuery),
        ),
    );

    setFilteredBooks(filtered);
    setPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedBooks = filteredBooks.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <Container>
      <Content>
        <Breadcrumb style={{ color: 'black' }} />
        <SearchBar onSearch={handleSearch} />
        <h2>Acervo de livros</h2>
        <Scrollable height="65vh">
          <ListWrapper>
            {paginatedBooks.map((book, index) => (
              <ListItem key={book.id}>
                <div className="info">
                  <strong>{book.title}</strong>
                  <p>ISBN: {book.isbn}</p>
                  <p>Autor: {book.author}</p>
                  <p>Editora: {book.publisher}</p>
                  <p>Total de exemplares: {book.copies}</p>
                  <p>Disponíveis: {book.available}</p>
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
        <div
          style={{ display: 'flex', justifyContent: 'end', marginTop: '16px' }}
        >
          <Pagination
            count={Math.ceil(filteredBooks.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            size="large"
            sx={{ '& .MuiPaginationItem-root': { fontSize: '1.5rem' } }}
          />
        </div>
      </Content>
    </Container>
  );
}
