import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchContainer, Input, IconWrapper } from './styles';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Atualiza a lista filtrada
  };

  return (
    <SearchContainer>
      <IconWrapper>
        <FaSearch />
      </IconWrapper>
      <Input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
}
