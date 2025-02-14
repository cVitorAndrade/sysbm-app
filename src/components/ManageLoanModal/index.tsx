import { HTMLAttributes, useCallback, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IoMdClose } from 'react-icons/io';
import {
  Container,
  Content,
  Footer,
  FormField,
  FormRow,
  FormWrapper,
} from './styles';
import Button from '../Button';
import { ILoanWithDetails } from '../../renderer/interfaces/ILoan';
import { LoanService } from '../../renderer/services/loan.service';

interface ManageLoanModalProps extends HTMLAttributes<HTMLDivElement> {
  loan: ILoanWithDetails | undefined;
  onClose: () => void;
}

export function ManageLoanModal({ loan, onClose }: ManageLoanModalProps) {
  const markLoanAsCompleteSchema = z.object({
    readerName: z.string(),
    bookConditionReturn: z.string().nonempty('Campo obrigatório'),
    title: z.string(),
    finalDate: z.string(),
    bookConditionDelivery: z.string(),
    status: z.string(),
    isLost: z.boolean().optional(),
    timesRenewed: z.number(),
  });

  const markLoanAsCompleteForm = useForm<
    z.infer<typeof markLoanAsCompleteSchema>
  >({
    resolver: zodResolver(markLoanAsCompleteSchema),
  });

  const onSubmit = async (values: z.infer<typeof markLoanAsCompleteSchema>) => {
    try {
      if (!loan) return;
      const { isLost, bookConditionReturn } = values;

      await LoanService.markLoanAsComplete(loan.id, {
        bookConditionReturn,
        status: isLost ? 'lost' : null,
      });

      alert('Empréstimo finalizado com sucesso');
      onClose();
    } catch (error) {
      console.log('ManageLoanModal - onSubmit: ', error);
    }
  };

  const onRenewLoan = async () => {
    try {
      if (!loan) return;

      await LoanService.renewLoan(loan.id);
      alert('Empréstimo renovado com sucesso');
      onClose();
    } catch (error) {
      console.log('ManageLoanModal - onSubmit: ', error);
    }
  };

  const lostBook = markLoanAsCompleteForm.watch('isLost');
  const allTimesRenewed = markLoanAsCompleteForm.watch('timesRenewed');
  const loanStatus = markLoanAsCompleteForm.watch('status');

  const onGetLoanDetails = useCallback(() => {
    if (!loan) return;

    const {
      bookTitle,
      readerName,
      status,
      finalDate,
      bookConditionDelivery,
      timesRenewed,
      bookConditionReturn,
    } = loan;

    markLoanAsCompleteForm.reset({
      finalDate: new Date(finalDate).toLocaleDateString('pt-BR'),
      readerName,
      status,
      title: bookTitle,
      bookConditionDelivery,
      timesRenewed,
      isLost: status === 'lost',
      bookConditionReturn: bookConditionReturn || '',
    });
  }, [loan, markLoanAsCompleteForm]);

  const { errors } = markLoanAsCompleteForm.formState;

  useEffect(() => {
    onGetLoanDetails();
  }, [loan, onGetLoanDetails]);

  return (
    <Container onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <IoMdClose
          size={25}
          style={{
            position: 'absolute',
            top: '1.6rem',
            right: '1.6rem',
            cursor: 'pointer',
          }}
          onClick={onClose}
        />

        <FormWrapper onSubmit={markLoanAsCompleteForm.handleSubmit(onSubmit)}>
          <FormRow>
            <FormField>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <label htmlFor="loan-readerName">Emprestado para</label>
                <input
                  type="text"
                  id="loan-readerName"
                  disabled
                  {...markLoanAsCompleteForm.register('readerName')}
                />
              </div>
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <label htmlFor="loan-title">Título do livro</label>
                <input
                  type="text"
                  id="loan-title"
                  disabled
                  {...markLoanAsCompleteForm.register('title')}
                />
              </div>
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <label htmlFor="loan-bookConditionDelivery">
                  Condição do livro ao ser emprestado
                </label>
                <input
                  type="text"
                  id="loan-bookConditionDelivery"
                  disabled
                  {...markLoanAsCompleteForm.register('bookConditionDelivery')}
                />
              </div>
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <label htmlFor="loan-finalDate">Data final do empréstimo</label>
                <input
                  type="text"
                  id="loan-finalDate"
                  disabled
                  {...markLoanAsCompleteForm.register('finalDate')}
                />
              </div>
            </FormField>

            <FormField>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <label htmlFor="loan-timesRenewed">Vezez renovado</label>
                <input
                  type="text"
                  id="loan-timesRenewed"
                  disabled
                  {...markLoanAsCompleteForm.register('timesRenewed')}
                />
              </div>
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <label htmlFor="loan-bookConditionReturn">
                Condição do livro na devolução{' '}
                <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                id="loan-bookConditionReturn"
                disabled={loanStatus !== 'active'}
                {...markLoanAsCompleteForm.register('bookConditionReturn')}
              />
              {errors?.bookConditionReturn && (
                <span>{errors?.bookConditionReturn?.message}</span>
              )}
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <input
                  type="checkbox"
                  id="loan-isLost"
                  {...markLoanAsCompleteForm.register('isLost')}
                  disabled={
                    loanStatus !== 'active' &&
                    loanStatus !== 'renewed' &&
                    loanStatus !== 'lost'
                  }
                />
                <label style={{ margin: '0' }} htmlFor="loan-isLost">
                  O livro foi perdido
                </label>
              </div>
            </FormField>
          </FormRow>

          <Footer>
            {loanStatus === 'active' ||
            loanStatus === 'renewed' ||
            loanStatus === 'lost' ? (
              <>
                <Button
                  title="Renovar empréstimo"
                  style={{ background: '#FBB02D' }}
                  disabled={lostBook || allTimesRenewed >= 3}
                  onClick={onRenewLoan}
                />
                <Button
                  onClick={() => {}}
                  title="Concluir empréstimo"
                  type="submit"
                />
              </>
            ) : (
              <Button onClick={onClose} title="Fechar" type="submit" />
            )}
          </Footer>
        </FormWrapper>
      </Content>
    </Container>
  );
}
