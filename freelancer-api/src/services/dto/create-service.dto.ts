import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({ example: 'Diseño de Logo Profesional' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  title!: string;

  @ApiProperty({ example: 'Diseño, Marketing, Desarrollo' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  category!: string;

  @ApiProperty({ example: 'Creacion de logo de marca para negocio...' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  description!: string;

  @ApiProperty({example: 50})
  @IsNumber()
  @IsNotEmpty()
  price!: number;
}

  