/* eslint-disable prettier/prettier */
// src/presentation/dto/create-todoitem.dto.ts
export class CreateTodoItemDto {
  todoList: string;
  title: string;
  description?: string;
  priority: number;
}
