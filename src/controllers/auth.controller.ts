import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AwsCognitoService } from 'src/use-cases/auth/aws-cognito.service';
import { AuthChangePasswordUserDto } from 'src/core/dtos/auth/auth-change-password-user.dto';
import { AuthRegisterUserDto } from 'src/core/dtos/auth/auth-register-user.dto';
import { AuthLoginUserDto } from 'src/core/dtos/auth/auth-login-user.dto';
import { AuthForgotPasswordUserDto } from 'src/core/dtos/auth/auth-forgot-password-user.dto';
import { AuthConfirmPasswordUserDto } from 'src/core/dtos/auth/auth-confirm-password-user.dto';

import * as dotenv from 'dotenv';
dotenv.config();

@Controller('api/v1/auth')
export class AuthController {
  constructor(private awsCognitoService: AwsCognitoService) {}

  @Post('/register')
  async register(@Body() authRegisterUserDto: AuthRegisterUserDto) {
    return this.awsCognitoService.registerUser(authRegisterUserDto);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Body() authLoginUserDto: AuthLoginUserDto) {
    return this.awsCognitoService.authenticateUser(authLoginUserDto);
  }

  @Post('/forgot-password')
  @UsePipes(ValidationPipe)
  async forgotPassword(
    @Body() authForgotPasswordUserDto: AuthForgotPasswordUserDto,
  ) {
    return this.awsCognitoService.forgotUserPassword(authForgotPasswordUserDto);
  }

  @Post('/confirm-password')
  @UsePipes(ValidationPipe)
  async confirmPassword(
    @Body() authConfirmPasswordUserDto: AuthConfirmPasswordUserDto,
  ) {
    return this.awsCognitoService.confirmUserPassword(
      authConfirmPasswordUserDto,
    );
  }

  @Post('/change-password')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard('jwt'))
  async changePassword(
    @Body() authChangePasswordUserDto: AuthChangePasswordUserDto,
  ) {
    const result = await this.awsCognitoService.changeUserPassword(
      authChangePasswordUserDto,
    );

    if (result == 'SUCCESS') {
      return { status: 'success' };
    }
  }
}
