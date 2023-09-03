import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class UpdateUserDto extends PartialType(CreateUserDto) {

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

    @Column({type: 'varchar', length: 50})
    password: string;
    
    @Column({
        type: "enum",
        enum: ["male", "female", "unspecify"],
        default: "unspecify"
    })
    gender: string



}
