import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userrepos: Repository<UserEntity> ){}
 
 
 
  async createNewUser(createUserDto: CreateUserDto): Promise<UserEntity> {

    //const user = await this.userrepos.create(createUserDto);
    const saveuser = await this.userrepos.save(createUserDto);
   
    return saveuser
  }

  findAllUser(): Promise<UserEntity[]> {
  return  this.userrepos.find();

  }

  findOneUser(id: number): Promise<UserEntity> {
    return this.userrepos.findOneBy({ id})
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto){
  
    const userId = await this.userrepos.findOneBy({id});
    if(!userId){
      throw new HttpException(`no user with such id`, 404)
    }
    const updateuser= await this.userrepos.update(id, updateUserDto);
    return updateuser;

  

   }

  remove(id: number) {
    if(!id){
      throw new HttpException(`no user with such id ${id} found`, 404);

    }
    return `This action removes a #${id} user`;
  }
}


    // const user: UserEntity = new UserEntity();
    // user.name = createUserDto.name;
    // user.age = createUserDto.age;
    // user.email = createUserDto.email;
    // user.username = createUserDto.username;
    // user.password = createUserDto.password;
    // user.gender = createUserDto.gender;
    //return this.userrepos.save(user)

  // const user: UserEntity = new UserEntity();
    // user.name = updateUserDto.name;
    // user.age = updateUserDto.age;
    // user.email = updateUserDto.email;
    // user.username = updateUserDto.username;
    // user.password = updateUserDto.password;
    // user.id = id;