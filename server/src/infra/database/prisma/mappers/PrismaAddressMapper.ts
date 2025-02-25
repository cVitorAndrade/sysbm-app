import { Address as AddressRaw } from '@prisma/client';
import { Address } from 'src/modules/address/entities/address';

export class PrismaAddressMapper {
  static toPrisma({
    id,
    city,
    createdAt,
    neighborhood,
    number,
    postalCode,
    street,
  }: Address): AddressRaw {
    return {
      id,
      city,
      createdAt,
      neighborhood,
      number,
      postalCode,
      street,
    };
  }
}
