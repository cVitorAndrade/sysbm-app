import { Bookshelf } from 'src/modules/bookshelf/entities/bookshelf';

export class BookshelfViewModel {
  static toHttp({ id, name, color, description, createdAt }: Bookshelf) {
    return {
      id,
      name,
      color,
      description,
      createdAt,
    };
  }
}
