/* eslint-disable prettier/prettier */
// test/unit/user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../src/application/services/user.service';
import { UserRepository } from '../../src/infrastructure/repositories/user.repository';
import { CreateUserDto } from '../../src/presentation/dto/create-user.dto';
import { User } from '../../src/domain/models/user.model';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = { username: 'testuser', password: 'testpassword' };
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    jest.spyOn(repository, 'create').mockResolvedValue(user);

    expect(await service.create(createUserDto)).toEqual(user);
  });
});
