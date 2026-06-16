import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { UsersService } from '../users/user.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
    private readonly usersService: UsersService,
  ) {}

  async create(createServiceDto: CreateServiceDto, providerId: number) {
    const provider = await this.usersService.findById(providerId);

    if (!provider) {
      throw new NotFoundException('Usuario propietario no encontrado');
    }

    const service = this.serviceRepository.create({
      ...createServiceDto,
      provider,
    });

    return this.serviceRepository.save(service);
  }

  //me falta buscar por id
  async findServicesByName(providerName: string) {
    const services = await this.serviceRepository.find({
      relations: { provider: true },
      where: {
        provider: {
          name: ILike(`%${providerName}%`),
        },
      },
      order: { id: 'DESC' },
    });

    return services.map((service) => ({
      id: service.id,
      title: service.title,
      category: service.category,
      description: service.description,
      provider: {
        name: service.provider.name,
      },
    }));
  }
}
