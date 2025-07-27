import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  describe('getUsers', () => {
    it('should return an array of users', () => {
      const result = [
        { id: 1, name: 'Pery Olevsky', email: 'Pery@Olevsky.com' },
        { id: 2, name: 'Hindy Albert', email: 'Hindy@Albert.com' },
      ];
      expect(appController.getUsers()).toEqual(result);
    });
  });
});
