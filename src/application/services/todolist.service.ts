/* eslint-disable prettier/prettier */
// src/application/services/todolist.service.ts
import { Injectable } from '@nestjs/common';
import { TodoListRepository } from '../../infrastructure/repositories/todolist.repository';
import { CreateTodoListDto } from '../../presentation/dto/create-todolist.dto';
import { TodoList } from '../../domain/models/todolist.model';

@Injectable()
export class TodoListService {
  constructor(private readonly todoListRepository: TodoListRepository) {}

  async create(createTodoListDto: CreateTodoListDto): Promise<TodoList> {
    const todoList = new TodoList();
    todoList.userId = createTodoListDto.userId;
    todoList.title = createTodoListDto.title;
    return this.todoListRepository.create(todoList);
  }

  async findByUserId(userId: string): Promise<TodoList[]> {
    return this.todoListRepository.findByUserId(userId);
  }

  async update(id: string, updateTodoListDto: Partial<CreateTodoListDto>): Promise<TodoList> {
    return this.todoListRepository.update(id, updateTodoListDto);
  }

  async delete(id: string): Promise<TodoList> {
    return this.todoListRepository.delete(id);
  }
}
