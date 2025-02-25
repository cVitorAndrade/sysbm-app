import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';
import { LoanStatus } from './loanStatus';

interface LoanSchema {
  readerId: string;
  librarianId: string;
  receivedById: string | null;
  bookId: string;
  bookConditionDelivery: string;
  bookConditionReturn: string | null;
  returnDate: Date | null;
  finalDate: Date;
  createdAt: Date;
  status: LoanStatus;
  observation: string | null;
  timesRenewed: number;
}

export class Loan {
  private _id: string;
  private props: LoanSchema;

  constructor(
    props: Replace<
      LoanSchema,
      {
        createdAt?: Date;
        receivedById?: string;
        observation?: string;
        bookConditionReturn?: string;
        timesRenewed?: number;
        status?: LoanStatus;
        returnDate?: Date;
      }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      receivedById: props.receivedById ?? null,
      returnDate: props.returnDate ?? null,
      observation: props.observation ?? null,
      bookConditionReturn: props.bookConditionReturn ?? null,
      status: props.status ?? 'active',
      timesRenewed: props.timesRenewed ?? 0,
      createdAt: props.createdAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get readerId(): string {
    return this.props.readerId;
  }

  set readerId(readerId: string) {
    this.props.readerId = readerId;
  }

  get librarianId(): string {
    return this.props.librarianId;
  }

  set librarianId(librarianId: string) {
    this.props.librarianId = librarianId;
  }

  get receivedById(): string {
    return this.props.receivedById;
  }

  set receivedById(receivedById: string) {
    this.props.receivedById = receivedById;
  }

  get bookId(): string {
    return this.props.bookId;
  }

  set bookId(bookId: string) {
    this.props.bookId = bookId;
  }

  get bookConditionDelivery(): string {
    return this.props.bookConditionDelivery;
  }

  set bookConditionDelivery(bookConditionDelivery: string) {
    this.props.bookConditionDelivery = bookConditionDelivery;
  }

  get bookConditionReturn(): string {
    return this.props.bookConditionReturn;
  }

  set bookConditionReturn(bookConditionReturn: string) {
    this.props.bookConditionReturn = bookConditionReturn;
  }

  get returnDate(): Date {
    return this.props.returnDate;
  }

  set returnDate(returnDate: Date) {
    this.props.returnDate = returnDate;
  }

  get finalDate(): Date {
    return this.props.finalDate;
  }

  set finalDate(finalDate: Date) {
    this.props.finalDate = finalDate;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get status(): LoanStatus {
    return this.props.status;
  }

  set status(status: LoanStatus) {
    this.props.status = status;
  }

  get observation(): string {
    return this.props.observation;
  }

  set observation(observation: string) {
    this.props.observation = observation;
  }

  get timesRenewed(): number {
    return this.props.timesRenewed;
  }

  set timesRenewed(timesRenewed: number) {
    this.props.timesRenewed = timesRenewed;
  }
}
