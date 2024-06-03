import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserController } from './presentation/controllers/user.controller';
import { UserService } from './application/services/user.service';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { User } from './domain/models/user.model';
import { TodoListController } from './presentation/controllers/todolist.controller';
import { TodoListService } from './application/services/todolist.service';
import { TodoListRepository } from './infrastructure/repositories/todolist.repository';
import { TodoList } from './domain/models/todolist.model';
import { TodoItemController } from './presentation/controllers/todoitem.controller';
import { TodoItemService } from './application/services/todoitem.service';
import { TodoItemRepository } from './infrastructure/repositories/todoitem.repository';
import { TodoItem } from './domain/models/todoitem.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/todo-app'),
    TypegooseModule.forFeature([User, TodoList, TodoItem]),
  ],
  controllers: [UserController, TodoListController, TodoItemController],
  providers: [
    UserService,
    UserRepository,
    TodoListService,
    TodoListRepository,
    TodoItemService,
    TodoItemRepository,
  ],
})
export class AppModule {}
