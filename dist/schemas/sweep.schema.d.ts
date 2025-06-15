import { Document } from 'mongoose';
import { SweepStatus } from '../enums';
export declare class Sweep {
    storeCode: string;
    status: SweepStatus;
    finishedAt?: Date;
    dealsEndedAt?: Date;
    productCount?: number;
    errorMessage?: string;
    createdAt: Date;
    updatedAt: Date;
}
export type SweepDocument = Sweep & Document<Sweep>;
export declare const SweepSchema: import("mongoose").Schema<Sweep, import("mongoose").Model<Sweep, any, any, any, Document<unknown, any, Sweep, any> & Sweep & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Sweep, Document<unknown, {}, import("mongoose").FlatRecord<Sweep>, {}> & import("mongoose").FlatRecord<Sweep> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
