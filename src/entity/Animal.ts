import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Group } from './Group';

@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    age!: number;

    @Column()
    weight!: number;

    @Column()
    sex!: string;

    @ManyToOne(() => Group, group => group.animals)
    group!: Group;

    constructor(data: Partial<Animal>) {
        Object.assign(this, data);
    }
}
