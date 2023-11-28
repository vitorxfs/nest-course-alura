import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UniqueEmail } from '../validators/unique-email.validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @UniqueEmail({ message: 'Email has already been used' })
  @IsOptional()
  email: string;

  @MinLength(6)
  @IsOptional()
  password: string;
}
