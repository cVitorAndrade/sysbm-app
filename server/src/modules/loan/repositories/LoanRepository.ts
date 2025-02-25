import { Loan } from '../entities/loan';
import { LoanWithDetails } from '../entities/LoanWithDetails';

export abstract class LoanRepository {
  abstract create(loan: Loan): Promise<void>;
  abstract getAll(): Promise<LoanWithDetails[]>;
  abstract findById(id: string): Promise<Loan | null>;
  abstract save(loan: Loan): Promise<void>;
}
