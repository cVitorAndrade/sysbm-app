import { Shelf } from 'src/modules/shelf/entities/shelf';

export class ShelfViewModel {
  static toHttp({ id, letter, number, bookShelfId }: Shelf) {
    return {
      id,
      number,
      letter,
      bookShelfId,
    };
  }
}
