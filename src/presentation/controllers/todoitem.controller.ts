/* eslint-disable prettier/prettier */
// src/presentation/controllers/todoitem.controller.ts
import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateTodoItemDto } from '../dto/create-todoitem.dto';
import { TodoItemService } from '../../application/services/todoitem.service';

@Controller('todoitems')
export class TodoItemController {
  constructor(private readonly todoItemService: TodoItemService) {}

  @Post()
  async create(@Body() createTodoItemDto: CreateTodoItemDto) {
    return this.todoItemService.create(createTodoItemDto);
  }

  @Get(':todoList')
  async findByTodoList(@Param('todoList') todoList: string) {
    return this.todoItemService.findByTodoList(todoList);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoItemDto: Partial<CreateTodoItemDto>) {
    return this.todoItemService.update(id, updateTodoItemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todoItemService.delete(id);
  }
}
