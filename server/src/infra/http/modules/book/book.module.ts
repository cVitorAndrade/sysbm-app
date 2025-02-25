import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { BookController } from './book.controller';
import { CreateBookUseCase } from 'src/modules/book/useCases/createBookUseCase/createBookUseCase';
import { GetAllBooksUseCase } from 'src/modules/book/useCases/getAllBookUseCase/getAllBookUseCase';
import { GetBookByIsbnUseCase } from 'src/modules/book/useCases/getBookByIsbnUseCase/getBookByIsbnUseCase';
import { DeleteBookByIdUseCase } from 'src/modules/book/useCases/deleteBookByIdUseCase/deleteBookByIdUseCase';
import { UpdateBookUseCase } from 'src/modules/book/useCases/updateBookUseCase/updateBookUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [
    CreateBookUseCase,
    GetAllBooksUseCase,
    GetBookByIsbnUseCase,
    DeleteBookByIdUseCase,
    UpdateBookUseCase,
  ],
})
export class BookModule {}
