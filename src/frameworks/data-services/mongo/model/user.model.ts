import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsBoolean,
  IsEmail,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  @IsString()
  firstName: string;

  @Prop()
  @IsString()
  lastName: string;

  @Prop()
  @IsEmail()
  email: string;

  @Prop()
  @IsStrongPassword()
  password: string;

  @Prop()
  @IsBoolean()
  emailVerified: boolean;
}

export const AuthorSchema = SchemaFactory.createForClass(User);
