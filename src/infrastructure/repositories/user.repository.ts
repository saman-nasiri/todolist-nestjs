/* eslint-disable prettier/prettier */
// src/infrastructure/repositories/user.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '../../domain/models/user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userModel.create(user);
  }

  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).exec();
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    return await this.userModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
