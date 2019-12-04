import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StationSchema } from './models/station.schema';
import { StationsService } from './stations.service';
import { StationsController } from './stations.controller';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Station' , schema: StationSchema}])
    ],
    providers: [StationsService],
    controllers: [StationsController]
})
export class StationsModule {}
