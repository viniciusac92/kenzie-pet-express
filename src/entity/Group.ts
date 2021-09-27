import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Animal } from './Animal';

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    scientific_name!: string;

    @OneToMany(() => Animal, animal => animal.group, {
        cascade: ['insert', 'update'],
        lazy: false,
    })
    animals!: Animal[];
}
