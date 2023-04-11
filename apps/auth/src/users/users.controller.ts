import { Body, Controller, Post , Get , Param} from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';

@Controller('auth/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() request: CreateUserRequest) {
    return this.usersService.createUser(request);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('email') email: string) {
    const user = await this.usersService.getUserByEmail(email);
    if (!user) {
      return`User with ID '${email}' not found`;
    }
    return user;
  }
}  



