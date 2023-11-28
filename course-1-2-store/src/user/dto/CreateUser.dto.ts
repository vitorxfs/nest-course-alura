import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UniqueEmail } from '../validators/unique-email.validator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @UniqueEmail({ message: 'Email has already been used' })
  email: string;

  @MinLength(6)
  password: string;
}
