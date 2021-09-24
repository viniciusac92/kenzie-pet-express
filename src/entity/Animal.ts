import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

    constructor(data: Partial<Animal>) {
        Object.assign(this, data);
    }
}
