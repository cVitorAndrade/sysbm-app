import { Address } from 'src/modules/address/entities/address';

export class AddressViewModel {
  static toHttp({
    id,
    city,
    createdAt,
    neighborhood,
    number,
    postalCode,
    street,
  }: Address) {
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
