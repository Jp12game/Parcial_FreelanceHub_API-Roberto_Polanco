import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { serviceModule } from './services/services.module';
import { Service } from './services/service.entity';
import { PublicModule } from './public/public.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '200923',
      database: process.env.DB_DATABASE || 'freelancer-services',
      entities: [User, Service],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    serviceModule,
    PublicModule,
  ],
})
export class AppModule {}
