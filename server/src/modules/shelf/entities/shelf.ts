import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface ShelfSchema {
  number: string;
  letter: string;
  bookShelfId: string;
  status: string;
}

export class Shelf {
  private _id: string;
  private props: ShelfSchema;

  constructor(
    props: Replace<ShelfSchema, { status?: string | null }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      status: props.status ?? 'active',
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get number(): string {
    return this.props.number;
  }

  get letter(): string {
    return this.props.letter;
  }

  get bookShelfId(): string {
    return this.props.bookShelfId;
  }

  get status(): string {
    return this.props.status;
  }

  set number(number: string) {
    this.props.number = number;
  }

  set status(status: string) {
    this.props.status = status;
  }

  set letter(letter: string) {
    this.props.letter = letter;
  }
}
