/* eslint-disable prettier/prettier */
// src/presentation/controllers/todolist.controller.ts
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateTodoListDto } from '../dto/create-todolist.dto';
import { TodoListService } from '../../application/services/todolist.service';

@Controller('todolists')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Post()
  async create(@Body() createTodoListDto: CreateTodoListDto) {
    return this.todoListService.create(createTodoListDto);
  }

  @Get(':userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.todoListService.findByUserId(userId);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTodoListDto: Partial<CreateTodoListDto>,
  ) {
    return this.todoListService.update(id, updateTodoListDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todoListService.delete(id);
  }
}
