import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements OnModuleInit {
  constructor(private readonly usersService: UsersService) {}

  async onModuleInit() {
    await this.usersService.ensureSeedUser({
      email: process.env.SEED_USER_EMAIL || 'demo@freelancer.com',
      name: process.env.SEED_USER_NAME || 'Demo User',
      password: process.env.SEED_USER_PASSWORD || '123456',
    });
  }
}
