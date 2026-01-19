/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsPositive, IsUrl } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from '../../Categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @IsUrl()
  @Column({ length: 1000, nullable: false })
  foto: string;

  @IsNotEmpty()
  @IsPositive()
  @Column()
  preco: number;

  @IsNotEmpty()
  @Column()
  quantidade: number;

  @UpdateDateColumn()
  data: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
