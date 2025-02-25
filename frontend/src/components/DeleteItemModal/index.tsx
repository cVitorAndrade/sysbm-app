import Button from '../Button';
import { Container, Content, Footer, MessageSection } from './styles';

interface DeleteItemModalProps {
  onClose: () => void;
  title: string;
  description: string;
  onConfirm: () => void;
}

export function DeleteItemModal({
  onClose,
  title,
  description,
  onConfirm,
}: DeleteItemModalProps) {
  return (
    <Container onClick={onClose}>
      <Content>
        <MessageSection>
          <h2>{title}</h2>
          <p>{description}</p>
        </MessageSection>
        <Footer>
          <Button
            onClick={onClose}
            title="Cancelar"
            type="button"
            style={{
              background: '#BF1A2F',
            }}
          />
          <Button onClick={onConfirm} title="Confirmar" type="button" />
        </Footer>
      </Content>
    </Container>
  );
}
