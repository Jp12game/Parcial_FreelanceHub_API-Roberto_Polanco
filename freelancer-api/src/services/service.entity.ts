import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('services')
export class Service {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Diseño de Logo Profesional' })
  @Column()
  title!: string;

  @ApiProperty({ example: 'Diseño, Marketing, Desarrollo' })
  @Column()
  category!: string;

  @ApiProperty({ example: 'Creacion de logo de marca para negocio con branding y paleta de colores...' })
  @Column()
  description!: string;

  @ApiProperty({ example: 50.25})
  @Column()
  price!: number;

  @ManyToOne(() => User, (user) => user.services, {
    eager: true,
    nullable: false,
  })
  provider!: User;
}

