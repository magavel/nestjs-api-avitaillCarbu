import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { PricePetrol } from './interfaces/pricePetrol.interface';
import { CreatePricePetrolDto } from './dto/create-pricePetrol.dto';

@Injectable()
export class PricesPetrolService {
    constructor(@InjectModel('PricePetrol') private readonly pricePetrolModel: Model<PricePetrol>){}

    async create(createPricePetrolDto: CreatePricePetrolDto): Promise<PricePetrol>{
        const createdPricePetrol = new this.pricePetrolModel(createPricePetrolDto)
        return await createdPricePetrol.save();
    }

    async findAll():Promise<PricePetrol[]>{
        return await this.pricePetrolModel.find().exec();
    }

    async findByStation():Promise<PricePetrol[]>{
        //TODO la requete pour filtrer par station
        return await this.pricePetrolModel.find().exec();
    }
}
