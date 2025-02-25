import { Body, Controller, Post } from '@nestjs/common';
import { CreateAddressUseCase } from 'src/modules/address/useCases/createAddressUseCase';
import { CreateAddressBody } from './dtos/createAddressBody';
import { AddressViewModel } from './viewModel/addressViewModel';

@Controller('address')
export class AddressController {
  constructor(private creaetAddressUseCase: CreateAddressUseCase) {}

  @Post()
  async createAddress(@Body() createAddressBody: CreateAddressBody) {
    const address = await this.creaetAddressUseCase.execute(createAddressBody);
    return AddressViewModel.toHttp(address);
  }
}
