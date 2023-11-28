import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { ListUserDTO } from './dto/ListUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: UserEntity) {
    await this.userRepository.save(user);
  }

  async updateUser(id: string, data: Partial<UserEntity>) {
    await this.userRepository.update(id, data);
  }

  async deleteUser(id: string) {
    this.userRepository.delete(id);
  }

  async listUsers() {
    const savedUsers = await this.userRepository.find();
    const userList = savedUsers.map(
      (user) => new ListUserDTO(user.id, user.name),
    );

    return userList;
  }
}
