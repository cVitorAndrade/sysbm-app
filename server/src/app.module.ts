import { Module } from '@nestjs/common';
import { LibrarianModule } from './infra/http/modules/librarian/librarian.module';
import { DatabaseModule } from './infra/database/prisma/database.module';
import { APP_GUARD } from '@nestjs/core';
import { JWTAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.guard';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { BookshelfModule } from './infra/http/modules/bookshelf/bookshelf.module';
import { ShelfModule } from './infra/http/modules/shelf/shelf.module';
import { BookModule } from './infra/http/modules/book/book.module';
import { AddressModule } from './infra/http/modules/address/address.module';
import { ReaderModule } from './infra/http/modules/readers/reader.module';
import { LoanModule } from './infra/http/modules/loan/loan.module';

@Module({
  imports: [
    LibrarianModule,
    DatabaseModule,
    AuthModule,
    BookshelfModule,
    ShelfModule,
    BookModule,
    AddressModule,
    ReaderModule,
    LoanModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
  ],
})
export class AppModule {}
