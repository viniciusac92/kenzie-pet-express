import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    scientific_name!: string;

    constructor(data: Partial<Group>) {
        Object.assign(this, data);
    }
}
