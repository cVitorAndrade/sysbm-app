import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface LibrarianSchema {
  email: string;
  name: string;
  password: string;
  permission: string;
  cpf: string;
  phoneNumber: string;
  status: string;
  createdAt: Date;
}

export class Librarian {
  private _id: string;
  private props: LibrarianSchema;

  constructor(
    props: Replace<LibrarianSchema, { createdAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }

  get name(): string {
    return this.props.name;
  }

  get password(): string {
    return this.props.password;
  }

  get permission(): string {
    return this.props.permission;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  get phoneNumber(): string {
    return this.props.phoneNumber;
  }

  get status(): string {
    return this.props.status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set email(email: string) {
    this.props.email = email;
  }

  set name(name: string) {
    this.props.name = name;
  }

  set password(password: string) {
    this.props.password = password;
  }

  set permission(permission: string) {
    this.props.permission = permission;
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber;
  }

  set status(status: string) {
    this.props.status = status;
  }
}
