import { Exclude } from "class-transformer";
import { IsAlphanumeric, IsEmail, IsInt, IsNotEmpty, IsString, IsStrongPassword, Matches, MinLength, isEnum, isStrongPassword } from "class-validator";


const passwordRegEx =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;
export class CreateUserDto {

    @IsString()
    @MinLength(2, {message: 'your name must contain aphabet alteast 2'})
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
   // @IsAlphanumeric( {message: 'Username does not allow other than alpha numeric chars.'})
    @MinLength(3, {message: 'username must have atleast 3 charcters'})
    username: string;
    
    @IsNotEmpty()
    @IsEmail(null, {message: 'please provide a valid email address'})
    email: string;

    @IsInt()z
    age: number;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    @Matches(passwordRegEx, {
        message: 'password must contain atleast one special character'
    })

    @IsString()
    @IsStrongPassword()
    
    password: string;
}
