import * as mongoose from 'mongoose';

export const PricePetrolSchema = new mongoose.Schema({
    value: Number,
    createdAt: String,
    station_id: String,
    author: String
})