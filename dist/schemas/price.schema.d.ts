import { Document, Types } from 'mongoose';
import { BestPriceLocation } from '../enums';
export declare class Price {
    sweepId: Types.ObjectId;
    price: number;
    wasPrice?: number;
    cupPrice?: number;
    cupMeasure?: string;
    multibuyPrice?: number;
    multibuySinglePrice?: number;
    multibuyQuantity?: number;
    multibuyCupPrice?: number;
    discountRate?: number;
    bestPriceLocation: BestPriceLocation;
    isInstoreOnly: boolean;
    isOnlineOnly: boolean;
    isMultibuy: boolean;
    isHalfPrice: boolean;
    isSpecial: boolean;
}
export type PriceDocument = Price & Document<Price>;
export declare const PriceSchema: import("mongoose").Schema<Price, import("mongoose").Model<Price, any, any, any, Document<unknown, any, Price, any> & Price & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Price, Document<unknown, {}, import("mongoose").FlatRecord<Price>, {}> & import("mongoose").FlatRecord<Price> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
