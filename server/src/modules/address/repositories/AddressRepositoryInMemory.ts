import { Address } from '../entities/address';
import { AddressRepository } from './AddressRepository';

export class AddressRepositoryInMemory implements AddressRepository {
  addresses: Address[] = [];
  async create(address: Address): Promise<void> {
    this.addresses.push(address);
  }
}
