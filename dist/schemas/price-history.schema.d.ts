import { Document } from 'mongoose';
export declare class PriceHistory {
    productCode: string;
    sweepDate: Date;
    price: number;
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
