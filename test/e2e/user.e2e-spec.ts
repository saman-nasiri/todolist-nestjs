/* eslint-disable prettier/prettier */
// test/e2e/user.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { CreateUserDto } from '../../src/presentation/dto/create-user.dto';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (POST)', async () => {
    const createUserDto: CreateUserDto = { username: 'testuser', password: 'testpassword' };
    return request(app.getHttpServer())
      .post('/users')
      .send(createUserDto)
      .expect(201)
      .expect((res) => {
        expect(res.body.username).toEqual(createUserDto.username);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
