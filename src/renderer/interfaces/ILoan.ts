export interface ICreateLoan {
  readerId: string;
  bookId: string;
  observation?: string;
  bookConditionDelivery: string;
}

export interface ILoan extends ICreateLoan {
  id: string;
  createdAt: string;
}
