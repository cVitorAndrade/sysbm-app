import { HTMLAttributes } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Container,
  Content,
  FormField,
  FormRow,
  FormWrapper,
  Select,
} from './styles';

interface MarkLoanAsCompletedProps extends HTMLAttributes<HTMLDivElement> {}

export function MarkLoanAsCompletedModal({}: MarkLoanAsCompletedProps) {
  const markLoanAsCompleteSchema = z.object({
    bookConditionReturn: z.string({ required_error: 'Campo obrigatório' }),
    status: z.enum(['Pendente', 'Devolvido', 'Extraviado'], {
      required_error: 'Campo obrigatório',
    }),
  });

  const markLoanAsCompleteForm = useForm<
    z.infer<typeof markLoanAsCompleteSchema>
  >({
    resolver: zodResolver(markLoanAsCompleteSchema),
  });

  const onSubmit = async (values: z.infer<typeof markLoanAsCompleteSchema>) => {
    try {
      const { bookConditionReturn, status } = values;
    } catch (error) {
      console.log('MarkLoanAsCompletedModal - onSubmit: ', error);
    }
  };

  return (
    <Container>
      <Content>
        <FormWrapper onSubmit={markLoanAsCompleteForm.handleSubmit(onSubmit)}>
          <FormRow>
            <FormField>
              <label htmlFor="loan-bookConditionReturn">
                Condição do livro na devolução
              </label>
              <input
                type="text"
                id="loan-bookConditionReturn"
                {...markLoanAsCompleteForm.register('bookConditionReturn')}
              />
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <label htmlFor="loan-status">Status de devolução</label>
              <Select
                id="loan-status"
                {...markLoanAsCompleteForm.register('status')}
              >
                <option value="">Selecione um status</option>
                <option value="Pendente">Pendente</option>
                <option value="returnedLate">Devolvido com atraso</option>
                <option value="lost">Perdido</option>
              </Select>
            </FormField>
          </FormRow>
        </FormWrapper>
      </Content>
    </Container>
  );
}
