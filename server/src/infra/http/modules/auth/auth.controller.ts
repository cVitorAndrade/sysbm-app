import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthRequestModel } from './models/authRequestModels';
import { LocalAuthGuard } from './guards/localAuth.guard';
import { SignInUseCase } from 'src/modules/auth/useCases/signInUseCase/signInUseCase';
import { Public } from './decorators/isPublic';
import { AuthenticatedRequestModel } from './models/authenticatedRequestModel';

@Controller()
export class AuthController {
  constructor(private signInUseCase: SignInUseCase) {}

  @Post('signIn')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() request: AuthRequestModel) {
    const { user } = request;
    const access_token = await this.signInUseCase.execute({ librarian: user });
    return { access_token };
  }
}
