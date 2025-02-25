import { Request } from 'express';

export interface AuthenticatedRequestModel extends Request {
  librarian: {
    id: string;
    email: string;
    name: string;
    password: string;
    permission: string;
    cpf: string;
    phoneNumber: string;
    status: string;
    createdAt: string;
  };
}
