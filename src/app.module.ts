import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationsModule } from './stations/stations.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PricesDieselModule } from './prices-diesel/prices-diesel.module';
import { PricesPetrolModule } from './prices-petrol/prices-petrol.module';
import config from './config';

@Module({
  imports: [StationsModule, MongooseModule.forRoot(config.mongoUri,{ useNewUrlParser: true , useUnifiedTopology: true}), PricesDieselModule, PricesPetrolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
