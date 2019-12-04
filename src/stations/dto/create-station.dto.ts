export class CreateStationDto{
    readonly name: string;
    readonly description: string;
    readonly createdAt: string;
    readonly position: {
        latitude: number,
        longitude: number
    };
    readonly images: [string];
}




