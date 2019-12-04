import { Module } from '@nestjs/common';
import { PricesPetrolService } from './prices-petrol.service';
import { PricesPetrolController } from './prices-petrol.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PricePetrolSchema } from './models/pricePetrol.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'PricePetrol' , schema: PricePetrolSchema}])

  ],
  providers: [PricesPetrolService],
  controllers: [PricesPetrolController]
})
export class PricesPetrolModule {}
