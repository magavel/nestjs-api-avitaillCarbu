import { Test, TestingModule } from '@nestjs/testing';
import { PricesDieselController } from './prices-diesel.controller';

describe('PricesDiesel Controller', () => {
  let controller: PricesDieselController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricesDieselController],
    }).compile();

    controller = module.get<PricesDieselController>(PricesDieselController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
