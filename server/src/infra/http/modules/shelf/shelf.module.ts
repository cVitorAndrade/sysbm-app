import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { ShelfController } from './shelf.controller';
import { CreateShelfUseCase } from 'src/modules/shelf/useCases/createShelfUseCase/createShelfUseCase';
import { GetShelfUseCase } from 'src/modules/shelf/useCases/getShelfUseCase/getShelfUseCase';
import { GetAllShelvesUseCase } from 'src/modules/shelf/useCases/getAllShelvesUseCase/getAllShelvesUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ShelfController],
  providers: [CreateShelfUseCase, GetShelfUseCase, GetAllShelvesUseCase],
})
export class ShelfModule {}
