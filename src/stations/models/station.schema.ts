import * as mongoose from 'mongoose';

export const StationSchema = new mongoose.Schema({
    name: String,
    description: String,
    createdAt: String,
    position:{
        latitude: Number,
        longitude: Number
    },
    images:[String],


})

