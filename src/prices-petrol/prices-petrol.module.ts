import { Module } from '@nestjs/common';
import { PricesPetrolService } from './prices-petrol.service';
import { PricesPetrolController } from './prices-petrol.controller';

@Module({
  providers: [PricesPetrolService],
  controllers: [PricesPetrolController]
})
export class PricesPetrolModule {}
