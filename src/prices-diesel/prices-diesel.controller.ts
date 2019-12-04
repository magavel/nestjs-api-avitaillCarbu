import { Controller, Post, Body } from '@nestjs/common';
import { PricesDieselService } from './prices-diesel.service';
import { CreatePriceDieselDto } from './dto/create-priceDiesel.dto';

@Controller('prices-diesel')
export class PricesDieselController {
    constructor(private readonly pricesDieselService: PricesDieselService){}


    @Post()
    async createPriceDiesel(@Body() createPriceDieselDto: CreatePriceDieselDto){
        return this.pricesDieselService.create(createPriceDieselDto);
    }
}
