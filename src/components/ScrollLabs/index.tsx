import React from 'react';
import { ScrollContainer } from './styles';

interface ScrollableProps {
  children: React.ReactNode;
  height?: string; // Altura opcional do container
}

export default function Scrollable({ children, height = '60vh' }: ScrollableProps) {
  return <ScrollContainer style={{ maxHeight: height }}>{children}</ScrollContainer>;
}
