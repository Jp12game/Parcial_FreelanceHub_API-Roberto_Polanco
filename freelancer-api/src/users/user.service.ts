import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

type SeedUser = Pick<User, 'email' | 'name' | 'password'>;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findById(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async ensureSeedUser(seedUser: SeedUser) {
    const existingUser = await this.findByEmail(seedUser.email);

    if (existingUser) {
      return existingUser;
    }

    return this.usersRepository.save(this.usersRepository.create(seedUser));
  }
}
