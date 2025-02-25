import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { CreateAddressUseCase } from 'src/modules/address/useCases/createAddressUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [CreateAddressUseCase],
})
export class AddressModule {}
