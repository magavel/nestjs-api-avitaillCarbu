import { Test, TestingModule } from '@nestjs/testing';
import { PricesPetrolController } from './prices-petrol.controller';

describe('PricesPetrol Controller', () => {
  let controller: PricesPetrolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricesPetrolController],
    }).compile();

    controller = module.get<PricesPetrolController>(PricesPetrolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
