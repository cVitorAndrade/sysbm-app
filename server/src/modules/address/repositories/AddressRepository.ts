import { Address } from '../entities/address';

export abstract class AddressRepository {
  abstract create(address: Address): Promise<void>;
}
