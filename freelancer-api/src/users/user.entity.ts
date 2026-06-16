import { ApiProperty } from '@nestjs/swagger';
import { Service } from '../services/service.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'demo@freelancer.com' })
  @Column({ unique: true })
  email!: string;

  @ApiProperty({ example: 'Demo User' })
  @Column()
  name!: string;

  @Column()
  password!: string;

  @OneToMany(() => Service, (service) => service.provider)
  services!: Service[];
}
