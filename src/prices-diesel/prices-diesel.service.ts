import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PriceDiesel } from './interfaces/priceDiesel.interface';
import { CreatePriceDieselDto } from './dto/create-priceDiesel.dto';

@Injectable()
export class PricesDieselService {
    constructor(@InjectModel('PriceDiesel') private readonly priceDieselModel: Model<PriceDiesel>){}

    async create(createPriceDieselDto: CreatePriceDieselDto): Promise<PriceDiesel>{
        const createdPriceDiesel = new this.priceDieselModel(createPriceDieselDto)
        return await createdPriceDiesel.save();
    }
}