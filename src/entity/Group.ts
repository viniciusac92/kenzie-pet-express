import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Animal } from '.';

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    scientific_name!: string;

    @OneToMany(() => Animal, animals => animals.group)
    animals!: Animal;

    constructor(data: Partial<Group>) {
        Object.assign(this, data);
    }
}
