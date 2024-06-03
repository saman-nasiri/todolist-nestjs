/* eslint-disable prettier/prettier */
// src/application/services/todoitem.service.ts
import { Injectable } from '@nestjs/common';
import { TodoItemRepository } from '../../infrastructure/repositories/todoitem.repository';
import { CreateTodoItemDto } from '../../presentation/dto/create-todoitem.dto';
import { TodoItem } from '../../domain/models/todoitem.model';

@Injectable()
export class TodoItemService {
  constructor(private readonly todoItemRepository: TodoItemRepository) {}

  async create(createTodoItemDto: CreateTodoItemDto): Promise<TodoItem> {
    const todoItem = new TodoItem();
    todoItem.todoList = createTodoItemDto.todoList;
    todoItem.title = createTodoItemDto.title;
    todoItem.description = createTodoItemDto.description;
    todoItem.priority = createTodoItemDto.priority;
    return this.todoItemRepository.create(todoItem);
  }

  async findByTodoList(todoList: string): Promise<TodoItem[]> {
    return this.todoItemRepository.findByTodoList(todoList);
  }

  async update(id: string, updateTodoItemDto: Partial<CreateTodoItemDto>): Promise<TodoItem> {
    return this.todoItemRepository.update(id, updateTodoItemDto);
  }

  async delete(id: string): Promise<TodoItem> {
    return this.todoItemRepository.delete(id);
  }
}
