/* eslint-disable prettier/prettier */
import { prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'todoitems' } })
export class TodoItem {
  @prop({ required: true })
  todoList: string;

  @prop({ required: true })
  title: string;

  @prop()
  description?: string;

  @prop({ required: true })
  priority: number;
}
