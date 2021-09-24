import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Animal } from './Animal';

@Entity()
export class Characteristic {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    constructor(data: Partial<Characteristic>) {
        Object.assign(this, data);
    }
}
