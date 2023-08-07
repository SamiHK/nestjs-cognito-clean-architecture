import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AwsCognitoService } from './aws-cognito.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from 'src/controllers';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [AuthController],
  providers: [AwsCognitoService, JwtStrategy],
})
export class AuthModule {}
