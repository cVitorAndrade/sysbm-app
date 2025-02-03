export interface ICreateReader {
  email: string;
  name: string;
  cpf: string;
  phoneNumber: string;
  status: string;
  birtDate: Date;
  addressId: string;
}

export interface IReader extends ICreateReader {
  id: string;
  createdAt: string;
}
