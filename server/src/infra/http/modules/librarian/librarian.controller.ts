import { Body, Controller, Post } from '@nestjs/common';
import { CreateLibrarianUseCase } from '../../../../modules/librarian/useCases/createLibrarianUseCase/createLibrarianUseCase';
import { CreateLibrarianBody } from './dtos/createLibrarianBody';
import { LibrarianViewModel } from './viewModel/librarianViewModel';

@Controller('librarian')
export class LibrarianController {
  constructor(private createLibrarianUseCase: CreateLibrarianUseCase) {}

  @Post()
  async createLibrarian(@Body() createLibrarianBody: CreateLibrarianBody) {
    const librarian =
      await this.createLibrarianUseCase.execute(createLibrarianBody);
    return LibrarianViewModel.toHttp(librarian);
  }
}
