import { Shelf as ShelfRaw } from '@prisma/client';
import { Shelf } from 'src/modules/shelf/entities/shelf';

export class PrismaShelfMapper {
  static toPrisma({
    id,
    number,
    letter,
    bookShelfId,
    status,
  }: Shelf): ShelfRaw {
    return {
      id,
      number,
      letter,
      bookShelfId,
      status,
    };
  }

  static toDomain({ id, number, letter, bookShelfId }: ShelfRaw): Shelf {
    return new Shelf(
      {
        bookShelfId,
        letter,
        number,
      },
      id,
    );
  }
}
