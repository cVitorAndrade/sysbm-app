import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { CreateBookUseCase } from 'src/modules/book/useCases/createBookUseCase/createBookUseCase';
import { CreateBookBody } from './dtos/createBookBody';
import { BookViewModel } from './viewModel/bookViewModel';
import { AuthenticatedRequestModel } from '../auth/models/authenticatedRequestModel';
import { Librarian } from 'src/modules/librarian/entities/librarian';
import { GetAllBooksUseCase } from 'src/modules/book/useCases/getAllBookUseCase/getAllBookUseCase';
import { GetBookByIsbnUseCase } from 'src/modules/book/useCases/getBookByIsbnUseCase/getBookByIsbnUseCase';
import { DeleteBookByIdUseCase } from 'src/modules/book/useCases/deleteBookByIdUseCase/deleteBookByIdUseCase';
import { UpdateBookBody } from './dtos/updateBookBody';
import { UpdateBookUseCase } from 'src/modules/book/useCases/updateBookUseCase/updateBookUseCase';

@Controller('book')
export class BookController {
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private getAllBooksUseCase: GetAllBooksUseCase,
    private getBookByIsbnUseCase: GetBookByIsbnUseCase,
    private deleteBookByIdUseCase: DeleteBookByIdUseCase,
    private updateBookUseCase: UpdateBookUseCase,
  ) {}

  @Post()
  async createBook(
    @Request() request: AuthenticatedRequestModel,
    @Body() createBookBody: CreateBookBody,
  ) {
    const { id } = request.user as Librarian;
    const book = await this.createBookUseCase.execute({
      ...createBookBody,
      librarianId: id,
    });
    return BookViewModel.toHttp(book);
  }

  @Get()
  async getAllBooks() {
    const books = await this.getAllBooksUseCase.execute();
    return books.map((book) => BookViewModel.toHttp(book));
  }

  @Get('isbn/:isbn')
  async getBookByIsbn(@Param('isbn') isbn: string) {
    const book = await this.getBookByIsbnUseCase.execute({ isbn });
    return BookViewModel.toHttp(book);
  }

  @Delete('/:id')
  async deleteBook(@Param('id') bookId: string) {
    await this.deleteBookByIdUseCase.execute({ bookId });
  }

  @Patch('/:id')
  async updateBook(
    @Param('id') bookId: string,
    @Body() updateBookBody: UpdateBookBody,
  ) {
    await this.updateBookUseCase.execute({
      ...updateBookBody,
      bookId,
    });
  }
}
