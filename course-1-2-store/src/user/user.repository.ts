import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list(): Promise<UserEntity[]> {
    return this.users;
  }

  async findByEmail(email: string) {
    return this.users.find((u) => u.email === email);
  }

  async update(id: string, data: Partial<UserEntity>) {
    const user = this.users.find((u) => u.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    Object.entries(data).forEach(([key, value]) => {
      if (key === id) {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async delete(id: string) {
    this.users = this.users.filter((u) => u.id !== id);
    return;
  }
}
