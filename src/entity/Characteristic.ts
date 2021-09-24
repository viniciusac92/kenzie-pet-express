import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
