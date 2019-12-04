import { Test, TestingModule } from '@nestjs/testing';
import { PricesPetrolService } from './prices-petrol.service';

describe('PricesPetrolService', () => {
  let service: PricesPetrolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricesPetrolService],
    }).compile();

    service = module.get<PricesPetrolService>(PricesPetrolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
