import { Controller, Post, Body, Get } from '@nestjs/common';
import { StationsService } from './stations.service';
import { CreateStationDto } from './dto/create-station.dto';

@Controller('stations')
export class StationsController {
    constructor(private readonly stationsService: StationsService){}


    @Post()
    async createStation(@Body() createStationDto: CreateStationDto){
        return this.stationsService.create(createStationDto);
    }

    @Get()
    async findAll(){
        return this.stationsService.findAll();
    }
}
