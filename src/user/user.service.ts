import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userrepos: Repository<UserEntity> ){}
  createNewUser(createUserDto: CreateUserDto) {

    const user: UserEntity = new UserEntity();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.gender = createUserDto.gender;
    return this.userrepos.save(user);
  }

  findAllUser(): Promise<UserEntity[]> {
    return this.userrepos.find()

  }

  findOneUser(id: number): Promise<UserEntity> {
    return this.userrepos.findOneBy({id})
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user: UserEntity = new UserEntity();
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;
    user.email = updateUserDto.email;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.id = id;
    const usercreated = await this.userrepos.save(user);
    if(!usercreated){
      throw new HttpException(`creating user was't succesful`, 404)
    }
    return {
      message: `created succesfully`
    }
   }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
