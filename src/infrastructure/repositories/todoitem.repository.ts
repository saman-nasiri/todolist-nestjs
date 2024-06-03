/* eslint-disable prettier/prettier */
// src/infrastructure/repositories/todoitem.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { TodoItem } from '../../domain/models/todoitem.model';

@Injectable()
export class TodoItemRepository {
  constructor(@InjectModel(TodoItem) private readonly todoItemModel: ReturnModelType<typeof TodoItem>) {}

  async create(todoItem: TodoItem): Promise<TodoItem> {
    return await this.todoItemModel.create(todoItem);
  }

  async findById(id: string): Promise<TodoItem> {
    return await this.todoItemModel.findById(id).exec();
  }

  async findByTodoList(todoList: string): Promise<TodoItem[]> {
    return await this.todoItemModel.find({ todoList }).sort({ priority: 1 }).exec();
  }

  async update(id: string, todoItem: Partial<TodoItem>): Promise<TodoItem> {
    return await this.todoItemModel.findByIdAndUpdate(id, todoItem, { new: true }).exec();
  }

  async delete(id: string): Promise<TodoItem> {
    return await this.todoItemModel.findByIdAndDelete(id).exec();
  }
}
