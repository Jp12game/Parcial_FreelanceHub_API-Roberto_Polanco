import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RequestUser } from '../auth/types/request-user.type';
import { ServicesService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';

type AuthenticatedRequest = {
  user: RequestUser;
};

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear servicio de freelancer con el usuario autenticado' })
  create(
    @Body() createBookDto: CreateServiceDto,
    @Request() request: AuthenticatedRequest,
  ) {
    return this.servicesService.create(createBookDto, request.user.id);
  }
}
