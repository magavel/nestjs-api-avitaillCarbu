export interface Station{
    name: string;
    description: string;
    createdAt: string;
    position: {
        latitude: number,
        longitude: number
    };
    images: [string];
}