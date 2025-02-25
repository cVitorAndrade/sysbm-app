import { Module } from '@nestjs/common';
import { LibrarianController } from './librarian.controller';
import { CreateLibrarianUseCase } from '../../../../modules/librarian/useCases/createLibrarianUseCase/createLibrarianUseCase';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LibrarianController],
  providers: [CreateLibrarianUseCase],
})
export class LibrarianModule {}
