import { Reader as ReaderRaw } from '@prisma/client';
import { Reader } from 'src/modules/reader/entities/reader';

export class PrismaReaderMapper {
  static toPrisma({
    id,
    email,
    name,
    cpf,
    phoneNumber,
    status,
    birtDate,
    addressId,
    createdAt,
  }: Reader): ReaderRaw {
    return {
      id,
      email,
      name,
      cpf,
      phoneNumber,
      status,
      birtDate,
      addressId,
      createdAt,
    };
  }

  static toDomain({
    id,
    addressId,
    birtDate,
    cpf,
    createdAt,
    email,
    name,
    phoneNumber,
    status,
  }: ReaderRaw): Reader {
    return new Reader(
      {
        addressId,
        birtDate,
        cpf,
        email,
        name,
        phoneNumber,
        status,
        createdAt,
      },
      id,
    );
  }
}
