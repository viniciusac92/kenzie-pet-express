import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    BeforeUpdate,
} from 'typeorm';
import bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @Column()
    is_superuser!: boolean;

    constructor(data: Partial<User>) {
        Object.assign(this, data);
    }

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        console.log(this.password);
        this.password = bcrypt.hashSync(this.password, 8);
    }
}
