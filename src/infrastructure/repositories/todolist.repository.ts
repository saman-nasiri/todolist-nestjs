/* eslint-disable prettier/prettier */
// src/infrastructure/repositories/todolist.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { TodoList } from '../../domain/models/todolist.model';

@Injectable()
export class TodoListRepository {
  constructor(
    @InjectModel(TodoList)
    private readonly todoListModel: ReturnModelType<typeof TodoList>,
  ) {}

  async create(todoList: TodoList): Promise<TodoList> {
    return await this.todoListModel.create(todoList);
  }

  async findById(id: string): Promise<TodoList> {
    return await this.todoListModel.findById(id).exec();
  }

  async findByUserId(userId: string): Promise<TodoList[]> {
    return await this.todoListModel.find({ userId }).exec();
  }

  async update(id: string, todoList: Partial<TodoList>): Promise<TodoList> {
    return await this.todoListModel
      .findByIdAndUpdate(id, todoList, { new: true })
      .exec();
  }

  async delete(id: string): Promise<TodoList> {
    return await this.todoListModel.findByIdAndDelete(id).exec();
  }
}
