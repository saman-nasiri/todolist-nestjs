/* eslint-disable prettier/prettier */
// src/domain/models/todolist.model.ts
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { TodoItem } from './todoitem.model';

@modelOptions({ schemaOptions: { collection: 'todolists' } })
export class TodoList {
  @prop({ required: true })
  userId: string;

  @prop({ required: true })
  title: string;

  @prop({ type: () => [TodoItem] })
  todoItems?: Ref<TodoItem>[];
}
