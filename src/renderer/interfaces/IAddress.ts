export interface ICreateAddress {
  street: string;
  number: string;
  city: string;
  postalCode: string;
  neighborhood: string;
}

export interface IAddress extends ICreateAddress {
  id: string;
  createdAt: string;
}
