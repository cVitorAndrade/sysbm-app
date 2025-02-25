import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { ReaderController } from './reader.controller';
import { CreateReaderUseCase } from 'src/modules/reader/useCases/createReaderUseCase/createReaderUseCase';
import { GetUserByCpfUseCase } from 'src/modules/reader/useCases/getReaderByCpfUseCase/getReaderByCpfUseCase';
import { GetAllReadersUseCase } from 'src/modules/reader/useCases/getAllReadersUseCase/getAllReadersUseCase';
import { DeleteReaderByIdUseCase } from 'src/modules/reader/useCases/deleteReaderByIdUseCase/deleteReaderByIdUseCase';
import { UpdateReaderUseCase } from 'src/modules/reader/useCases/updateReaderUseCase/updateReaderUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ReaderController],
  providers: [
    CreateReaderUseCase,
    GetUserByCpfUseCase,
    GetAllReadersUseCase,
    DeleteReaderByIdUseCase,
    UpdateReaderUseCase,
  ],
})
export class ReaderModule {}
