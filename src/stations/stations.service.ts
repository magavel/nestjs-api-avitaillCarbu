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

    async findAll(): Promise<Station[]>{
        return await this.stationModel.find().exec();
    }

    // recuperer un tableau de stations comprise ds une bbox 
    async findByBBox():Promise<Station[]>{
        //TODO faire la requete pour filtrer par valeur latitude et longitude
        return await this.stationModel.find().exec();
    }
}
