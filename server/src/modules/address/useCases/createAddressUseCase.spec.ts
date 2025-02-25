import { AddressRepositoryInMemory } from '../repositories/AddressRepositoryInMemory';
import { CreateAddressUseCase } from './createAddressUseCase';

let createAddressUseCase: CreateAddressUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;

describe('Create address', () => {
  beforeEach(() => {
    addressRepositoryInMemory = new AddressRepositoryInMemory();
    createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
  });

  it('Should be able to create address', async () => {
    expect(addressRepositoryInMemory.addresses).toEqual([]);

    const address = await createAddressUseCase.execute({
      street: 'Rua',
      city: 'City',
      neighborhood: 'Bairro',
      number: '400',
      postalCode: '000000-00',
    });

    expect(addressRepositoryInMemory.addresses).toEqual([address]);
  });
});
