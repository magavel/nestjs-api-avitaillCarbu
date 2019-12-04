import { Controller, Post, Body } from '@nestjs/common';
import { PricesPetrolService } from './prices-petrol.service';
import { CreatePricePetrolDto } from './dto/create-pricePetrol.dto';

@Controller('prices-petrol')
export class PricesPetrolController {
    constructor(private readonly pricesPetrolService: PricesPetrolService){}

    @Post()
    async createPricePetrol(@Body() createPricePetrolDto: CreatePricePetrolDto){
        return this.pricesPetrolService.create(createPricePetrolDto);
    }
}
