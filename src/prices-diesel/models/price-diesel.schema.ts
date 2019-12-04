import * as mongoose from 'mongoose';

export const PriceDieselSchema = new mongoose.Schema({
    value: Number,
    createdAt: String,
    station_id: String,
    author: String
})