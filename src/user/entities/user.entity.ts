
import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 30})
    name: string;

    @Column({type: 'varchar', length: 15})
    username: string;

    @Column({type: 'varchar', length: 100})
    email: string;

    @Column({type: 'int'})
    age: number;

    @Exclude()
    @Column({type: 'varchar', length: 50})
    password: string;



}
