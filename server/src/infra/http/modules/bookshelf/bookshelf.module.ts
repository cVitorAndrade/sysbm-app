import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { BookshelfController } from './bookshelf.controller';
import { CreateBookshelfUseCase } from 'src/modules/bookshelf/useCases/createBookshelfUseCase/createBookshelfUseCase';
import { GetBookshelfUseCase } from 'src/modules/bookshelf/useCases/getBookshelfUseCase/getBookshelfUseCase';
import { GetAllBookshelfUseCase } from 'src/modules/bookshelf/useCases/getAllBookshelfUseCase/getAllBookshelfUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [BookshelfController],
  providers: [
    CreateBookshelfUseCase,
    GetBookshelfUseCase,
    GetAllBookshelfUseCase,
  ],
})
export class BookshelfModule {}
