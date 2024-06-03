/* eslint-disable prettier/prettier */
// src/application/services/user.service.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { CreateUserDto } from '../../presentation/dto/create-user.dto';
import { User } from '../../domain/models/user.model';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    return this.userRepository.create(user);
  }
}
