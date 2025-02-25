import { Container } from './styles';

interface ButtonProps {
  title: string;
  onClick: () => void; // Propriedade opcional para clique
  type: 'button' | 'submit' | 'reset'; // Adicionando type compatível com HTMLButtonElement
}

export default function Button({
  title,
  onClick,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} as="button" type={type} onClick={onClick}>
      {title}
    </Container>
  );
}
