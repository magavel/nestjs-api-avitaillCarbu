import { Test, TestingModule } from '@nestjs/testing';
import { PricesDieselService } from './prices-diesel.service';

describe('PricesDieselService', () => {
  let service: PricesDieselService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricesDieselService],
    }).compile();

    service = module.get<PricesDieselService>(PricesDieselService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
