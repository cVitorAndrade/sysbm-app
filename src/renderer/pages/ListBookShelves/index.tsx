import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Pagination } from '@mui/material';
import { Container, Content, ListItem, ListWrapper, Actions } from './styles';
import Breadcrumb from '../../../components/Breadcrumb';
import SearchBar from '../../../components/SearchBar';
import Scrollable from '../../../components/ScrollLabs';
import Header from '../../../components/Header';
import { IBookshelfWithDetails } from '../../interfaces/IBookshelf';
import { BookshelfService } from '../../services/bookshelf.service';
import { ShelfService } from '../../services/shelf.service';

export default function ListBookshelves() {
  const [bookshelves, setBookshelves] = useState<IBookshelfWithDetails[]>([]);
  const [filteredBookshelves, setFilteredBookshelves] = useState<
    IBookshelfWithDetails[]
  >([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    if (normalizedQuery === '') {
      setFilteredBookshelves(bookshelves);
      return;
    }

    const filtered = bookshelves.filter((bookshelf) =>
      Object.entries(bookshelf)
        .filter(
          ([key]) => key === 'name' || key === 'color' || key === 'description',
        )
        .some(
          ([_, value]) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(normalizedQuery),
        ),
    );

    setFilteredBookshelves(filtered);
    setPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedBookshelves = filteredBookshelves.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  useEffect(() => {
    const onGetBookshelves = async () => {
      try {
        const allBookshelves = await BookshelfService.getAllBookshelf();
        const allShelves = await ShelfService.getAllShelves();

        const bookshelfWithDetails = allBookshelves.map((bookshelf) => ({
          ...bookshelf,
          shelves: allShelves.filter(
            (shelf) => shelf.bookShelfId === bookshelf.id,
          ),
        }));

        setBookshelves(bookshelfWithDetails);
        setFilteredBookshelves(bookshelfWithDetails);
      } catch (error) {
        console.log('BookShelves - onGetBookshelves: ', error);
      }
    };

    onGetBookshelves();
  }, []);

  return (
    <Container>
      {/* <Header /> */}
      <Content>
        <Breadcrumb style={{ color: 'black' }} />
        <SearchBar onSearch={handleSearch} />
        <h2>Lista de estantes</h2>
        <Scrollable>
          <ListWrapper>
            {paginatedBookshelves.map(
              ({ id, name, color, shelves, description }) => (
                <ListItem key={id}>
                  <div className="info">
                    <strong>Estante: {name}</strong>
                    <p>Cor: {color}</p>
                    {description && <p>{description}</p>}
                    <p>Prateleiras: {shelves.length}</p>
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
              ),
            )}
          </ListWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              marginTop: '16px',
            }}
          >
            <Pagination
              count={Math.ceil(filteredBookshelves.length / itemsPerPage)}
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
