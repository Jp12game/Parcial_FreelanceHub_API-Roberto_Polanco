import { Module } from '@nestjs/common';
import { serviceModule } from '../services/services.module';
import { PublicController } from './public.controller';

@Module({
  imports: [serviceModule],
  controllers: [PublicController],
})
export class PublicModule {}
