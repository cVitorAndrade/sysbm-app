import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface BookshelfSchema {
  name: string;
  color: string;
  status: string;
  description: string | null;
  createdAt: Date;
}

export class Bookshelf {
  private _id: string;
  private props: BookshelfSchema;

  constructor(
    props: Replace<
      BookshelfSchema,
      { createdAt?: Date; description?: string | null; status?: string | null }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      description: props.description ?? null,
      status: props.status || 'active',
    };

    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get color(): string {
    return this.props.color;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string | null {
    return this.props.description;
  }

  get status(): string {
    return this.props.status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set name(name: string) {
    this.props.name = name;
  }

  set color(color: string) {
    this.props.color = color;
  }

  set description(description: string) {
    this.props.description = description;
  }

  set status(status: string) {
    this.props.status = status;
  }
}
