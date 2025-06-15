import { Document } from 'mongoose';
import { Price } from './price.schema';
export declare class Product {
    storeCode: string;
    code: string;
    name: string;
    brand: string;
    productUrl: string;
    packageSize?: string;
    categoryCodes: string[];
    isRestricted: boolean;
    isAvailable: boolean;
    price?: Price;
    originalImageUrls: string[];
    imageUrls: string[];
    createdAt: Date;
    updatedAt: Date;
}
export type ProductDocument = Product & Document<Product>;
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product, any> & Product & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}> & import("mongoose").FlatRecord<Product> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
