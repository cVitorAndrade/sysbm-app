import React from 'react';
import { ScrollContainer } from './styles';

interface ScrollableProps {
  children: React.ReactNode;
  height?: string;
}

export default function Scrollable({
  children,
  height = '60vh',
}: ScrollableProps) {
  return (
    <ScrollContainer style={{ maxHeight: height, paddingBottom: '16px' }}>
      {children}
    </ScrollContainer>
  );
}
