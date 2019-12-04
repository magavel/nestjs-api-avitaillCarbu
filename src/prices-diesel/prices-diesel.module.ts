import { Module } from '@nestjs/common';
import { PricesDieselService } from './prices-diesel.service';
import { PricesDieselController } from './prices-diesel.controller';
import { PriceDieselSchema } from './models/price-diesel.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'PriceDiesel' , schema: PriceDieselSchema}])

  ],
  providers: [PricesDieselService],
  controllers: [PricesDieselController]
})
export class PricesDieselModule {}
