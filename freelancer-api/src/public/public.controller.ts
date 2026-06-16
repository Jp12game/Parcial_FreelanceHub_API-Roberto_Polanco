import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServicesService } from '../services/service.service';

@ApiTags('public')
@Controller('public')
export class PublicController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get('services/:name')
  @ApiOperation({ summary: 'Listar servicios disponibles por nombre de freelancer' })
  findByProviderName(@Param('name') name: string) {
        return this.servicesService.findServicesByName(name);
    }
}
