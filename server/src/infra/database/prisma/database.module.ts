import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { LibrarianRepository } from 'src/modules/librarian/repositories/LibrarianRepository';
import { PrismaLibrarianRepository } from './repositories/PrismaLibrarianRepository';
import { BookshelfRepository } from 'src/modules/bookshelf/repositories/bookshelfRepository';
import { PrismaBookshelfRepository } from './repositories/PrismaBookshelfRepository';
import { ShelfRepository } from 'src/modules/shelf/repositories/shelfRepository';
import { PrismaShelfRepository } from './repositories/PrismaShelfRepository';
import { BookRepository } from 'src/modules/book/repositories/BookRepository';
import { PrismaBookRepository } from './repositories/PrismaBookRepository';
import { AddressRepository } from 'src/modules/address/repositories/AddressRepository';
import { PrismaAddressRepository } from './repositories/PrismaAddressRepository';
import { ReaderRepository } from 'src/modules/reader/repositories/readerRepository';
import { PrismaReaderRepository } from './repositories/PrismaReaderRepository';
import { LoanRepository } from 'src/modules/loan/repositories/LoanRepository';
import { PrismaLoanRepository } from './repositories/PrismaLoanRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: LibrarianRepository,
      useClass: PrismaLibrarianRepository,
    },
    {
      provide: BookshelfRepository,
      useClass: PrismaBookshelfRepository,
    },
    {
      provide: ShelfRepository,
      useClass: PrismaShelfRepository,
    },
    {
      provide: BookRepository,
      useClass: PrismaBookRepository,
    },
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository,
    },
    {
      provide: ReaderRepository,
      useClass: PrismaReaderRepository,
    },
    {
      provide: LoanRepository,
      useClass: PrismaLoanRepository,
    },
  ],
  exports: [
    LibrarianRepository,
    BookshelfRepository,
    ShelfRepository,
    BookRepository,
    AddressRepository,
    ReaderRepository,
    LoanRepository,
  ],
})
export class DatabaseModule {}
