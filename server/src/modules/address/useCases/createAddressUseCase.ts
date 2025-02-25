import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../repositories/AddressRepository';
import { Address } from '../entities/address';

interface CreateAddressRequest {
  street: string;
  number: string;
  city: string;
  postalCode: string;
  neighborhood: string;
}

@Injectable()
export class CreateAddressUseCase {
  constructor(private addressRepository: AddressRepository) {}

  async execute(createAddressRequest: CreateAddressRequest) {
    const address = new Address(createAddressRequest);
    await this.addressRepository.create(address);
    return address;
  }
}
