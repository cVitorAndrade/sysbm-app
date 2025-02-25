import { Reader } from 'src/modules/reader/entities/reader';

export class ReaderViewModel {
  static toHttp({
    id,
    email,
    name,
    cpf,
    phoneNumber,
    birtDate,
    status,
    addressId,
    createdAt,
  }: Reader) {
    return {
      id,
      email,
      name,
      cpf,
      phoneNumber,
      birtDate,
      status,
      addressId,
      createdAt,
    };
  }
}
