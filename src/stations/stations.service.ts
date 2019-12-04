import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStationDto } from './dto/create-station.dto';
import { Station } from './interfaces/station.interface';

@Injectable()
export class StationsService {
    constructor(@InjectModel('Station') private readonly stationModel: Model<Station>) { }

    async create(createStationDto: CreateStationDto): Promise<Station> {
        const createdStation = new this.stationModel(createStationDto)
        return await createdStation.save();
    }


}
