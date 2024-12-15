import { Container } from './styles';

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return <Container>{title}</Container>;
}
