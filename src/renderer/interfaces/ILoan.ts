export interface ICreateLoan {
  readerId: string;
  bookId: string;
  observation?: string;
  bookConditionDelivery: string;
}

export type LoanStatus =
  | 'overdue'
  | 'returnedOnTime'
  | 'returnedLate'
  | 'lost'
  | 'active'
  | 'renewed';

export interface ILoan extends ICreateLoan {
  id: string;
  readerId: string;
  librarianId: string;
  receivedById: string | null;
  returnDate: string | null;
  bookId: string;
  bookConditionDelivery: string;
  bookConditionReturn: string | null;
  finalDate: string;
  status: LoanStatus;
  timesRenewed: number;
  createdAt: string;
}

export interface ILoanWithDetails extends ILoan {
  readerName: string;
  bookTitle: string;
  readerCpf: string;
}
