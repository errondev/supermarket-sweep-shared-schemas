import mongoose, { Document } from 'mongoose';
export declare class Store {
    sweepId?: mongoose.Types.ObjectId;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
export type StoreDocument = Store & Document<Store>;
export declare const StoreSchema: mongoose.Schema<Store, mongoose.Model<Store, any, any, any, mongoose.Document<unknown, any, Store, any> & Store & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Store, mongoose.Document<unknown, {}, mongoose.FlatRecord<Store>, {}> & mongoose.FlatRecord<Store> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
