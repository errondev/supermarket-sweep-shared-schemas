import { Document } from 'mongoose';
import { Price } from './price.schema';
export declare class PriceHistory {
    storeCode: string;
    productCode: string;
    price: Price;
    createdAt: Date;
    updatedAt: Date;
}
export type PriceHistoryDocument = PriceHistory & Document<PriceHistory>;
export declare const PriceHistorySchema: import("mongoose").Schema<PriceHistory, import("mongoose").Model<PriceHistory, any, any, any, Document<unknown, any, PriceHistory, any> & PriceHistory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PriceHistory, Document<unknown, {}, import("mongoose").FlatRecord<PriceHistory>, {}> & import("mongoose").FlatRecord<PriceHistory> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
