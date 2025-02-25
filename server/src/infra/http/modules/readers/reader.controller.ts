import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReaderUseCase } from 'src/modules/reader/useCases/createReaderUseCase/createReaderUseCase';
import { CreateReaderBody } from './dtos/createReaderBody';
import { ReaderViewModel } from './viewModel/readerViewModel';
import { GetUserByCpfUseCase } from 'src/modules/reader/useCases/getReaderByCpfUseCase/getReaderByCpfUseCase';
import { GetAllReadersUseCase } from 'src/modules/reader/useCases/getAllReadersUseCase/getAllReadersUseCase';
import { DeleteReaderByIdUseCase } from 'src/modules/reader/useCases/deleteReaderByIdUseCase/deleteReaderByIdUseCase';
import { UpdateReaderBody } from './dtos/updateReaderBody';
import { UpdateReaderUseCase } from 'src/modules/reader/useCases/updateReaderUseCase/updateReaderUseCase';

@Controller('reader')
export class ReaderController {
  constructor(
    private createReaderUseCase: CreateReaderUseCase,
    private getUserByCpfUseCase: GetUserByCpfUseCase,
    private getAllReadersUseCase: GetAllReadersUseCase,
    private deleteReaderByUseCase: DeleteReaderByIdUseCase,
    private updateReaderUseCase: UpdateReaderUseCase,
  ) {}

  @Post()
  async createReader(@Body() createReaderBody: CreateReaderBody) {
    const reader = await this.createReaderUseCase.execute(createReaderBody);
    return ReaderViewModel.toHttp(reader);
  }

  @Get('cpf/:cpf')
  async getReaderByCpf(@Param('cpf') cpf: string) {
    const reader = await this.getUserByCpfUseCase.execute({ cpf });
    return ReaderViewModel.toHttp(reader);
  }

  @Get()
  async getAllReaders() {
    const readers = await this.getAllReadersUseCase.execute();
    return readers.map((reader) => ReaderViewModel.toHttp(reader));
  }

  @Delete('/:id')
  async deleteBook(@Param('id') readerId: string) {
    await this.deleteReaderByUseCase.execute({ readerId });
  }

  @Patch('/:id')
  async updateReader(
    @Param('id') readerId: string,
    @Body() updateReaderBody: UpdateReaderBody,
  ) {
    await this.updateReaderUseCase.execute({
      ...updateReaderBody,
      readerId,
    });
  }
}
