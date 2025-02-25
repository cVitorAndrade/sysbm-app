import { Request } from 'express';
import { Librarian } from 'src/modules/librarian/entities/librarian';

export interface AuthRequestModel extends Request {
  user: Librarian;
}
