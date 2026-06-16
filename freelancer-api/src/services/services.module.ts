import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { ServicesController } from './service.controller';
import { ServicesService } from './service.service';
import { Service } from './service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service]), UsersModule],
  controllers: [ServicesController],
  providers: [ServicesService],
  exports: [ServicesService],
})
export class serviceModule {}
