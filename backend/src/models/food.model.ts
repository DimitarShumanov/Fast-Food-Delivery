import {Schema, model} from 'mongoose';

export interface Food{
    id:string;
    name:string;
    price:number;
    cookingTime:string;
    favorite:boolean;
    origins: string[];
    stars: number;
    imageUrl: string;
    tags: string[];
    description: string;
    isOnSale: boolean;
    salePrice: number;
}

export const FoodSchema = new Schema<Food>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        cookingTime: {type: String, required:false},
        favorite: {type: Boolean, default:false},
        origins: {type: [String], required:false},
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        tags: {type: [String]},
        description: {type: String, required:false},
        isOnSale: {type:Boolean, default:false},
        salePrice: {type:Number, required:false},
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const FoodModel = model<Food>('food', FoodSchema);