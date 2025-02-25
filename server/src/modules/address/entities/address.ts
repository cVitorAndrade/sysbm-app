import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface AddressSchema {
  street: string;
  number: string;
  city: string;
  postalCode: string;
  neighborhood: string;
  createdAt: Date;
}

export class Address {
  private _id: string;
  private props: AddressSchema;

  constructor(
    props: Replace<AddressSchema, { createdAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    this._id = id || randomUUID();
  }

  get id() {
    return this._id;
  }

  get street(): string {
    return this.props.street;
  }

  set street(street: string) {
    this.props.street = street;
  }

  get number(): string {
    return this.props.number;
  }

  set number(number: string) {
    this.props.number = number;
  }

  get city(): string {
    return this.props.city;
  }

  set city(city: string) {
    this.props.city = city;
  }

  get postalCode(): string {
    return this.props.postalCode;
  }

  set postalCode(postalCode: string) {
    this.props.postalCode = postalCode;
  }

  get neighborhood(): string {
    return this.props.neighborhood;
  }

  set neighborhood(neighborhood: string) {
    this.props.neighborhood = neighborhood;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
