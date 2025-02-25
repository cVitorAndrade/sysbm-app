import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface ReaderSchema {
  email: string;
  name: string;
  cpf: string;
  phoneNumber: string;
  createdAt: Date;
  status: string;
  birtDate: Date;
  addressId: string;
}

export class Reader {
  private _id: string;
  private props: ReaderSchema;

  constructor(props: Replace<ReaderSchema, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      status: props.status ?? 'active',
    };

    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  get phoneNumber(): string {
    return this.props.phoneNumber;
  }

  set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get status(): string {
    return this.props.status;
  }

  set status(status: string) {
    this.props.status = status;
  }

  get addressId(): string {
    return this.props.addressId;
  }

  set addressId(addressId: string) {
    this.props.addressId = addressId;
  }

  get birtDate(): Date {
    return this.props.birtDate;
  }

  set birtDate(birtDate: Date) {
    this.props.birtDate = birtDate;
  }
}
