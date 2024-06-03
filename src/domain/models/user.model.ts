/* eslint-disable prettier/prettier */

import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { TodoList } from './todolist.model';

@modelOptions({ schemaOptions: { collection: 'users' } })
export class User {
  @prop({ required: true })
  username: string;

  @prop({ required: true })
  password: string;

  @prop({ type: () => [TodoList] })
  todoLists?: Ref<TodoList>[];
}
