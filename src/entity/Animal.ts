import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Characteristic } from './Characteristic';
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

    @ManyToOne(() => Group)
    group!: Group[];

    @ManyToMany(() => Characteristic)
    @JoinTable()
    chars!: Characteristic[];

    constructor(data: Partial<Animal>) {
        Object.assign(this, data);
    }
}
