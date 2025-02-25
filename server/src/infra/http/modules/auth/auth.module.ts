import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { ValidateLibrarianUseCase } from '../../../../modules/auth/useCases/validateLibrarianUseCase/validateLibrarianUseCase';
import { AuthController } from './auth.controller';
import { SignInValidateDTOMiddleware } from './middlewares/signInValidateDTO.middleware';
import { JwtModule } from '@nestjs/jwt';
import { SignInUseCase } from '../../../../modules/auth/useCases/signInUseCase/signInUseCase';
import { LocalStrategy } from 'src/modules/auth/strategies/local.strategy';
import { JWTStrategy } from 'src/modules/auth/strategies/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    JWTStrategy,
    ValidateLibrarianUseCase,
    SignInUseCase,
  ],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SignInValidateDTOMiddleware).forRoutes('/signIn');
  }
}
