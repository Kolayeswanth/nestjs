import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { BadRequestException } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
  @Get(':id')
  async findUserById(@Param('id') id: any): Promise<User> {
    return await this.userRepository.findOneById(id);
  }
  @Post()
  async createUser(@Body() user: User): Promise<User> {
    if (!user.name) {
      throw new BadRequestException('Name property cannot be null');
    }   
    return await this.userRepository.save(user);
  }
  @Put(':id')
  async updateUser(@Param('id') id: any, @Body() user: User): Promise<any> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOneById(id);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
