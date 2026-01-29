import { Document } from 'mongoose';
export declare class StoreMappings {
    w?: string[];
    c?: string[];
    cw?: string[];
    p?: string[];
    a?: string[];
}
export type StoreMappingsDocument = StoreMappings & Document<StoreMappings>;
export declare const StoreMappingsSchema: import("mongoose").Schema<StoreMappings, import("mongoose").Model<StoreMappings, any, any, any, Document<unknown, any, StoreMappings, any> & StoreMappings & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StoreMappings, Document<unknown, {}, import("mongoose").FlatRecord<StoreMappings>, {}> & import("mongoose").FlatRecord<StoreMappings> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Category {
    parentCode?: string;
    code: string;
    name: string;
    index: number;
    mappings: StoreMappings;
    isRestricted: boolean;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type CategoryDocument = Category & Document<Category>;
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, Document<unknown, any, Category, any> & Category & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, Document<unknown, {}, import("mongoose").FlatRecord<Category>, {}> & import("mongoose").FlatRecord<Category> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
