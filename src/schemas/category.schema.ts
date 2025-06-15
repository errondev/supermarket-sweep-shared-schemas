import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, id: false, _id: false })
export class StoreMappings {
  @Prop()
  w?: string[];

  @Prop()
  c?: string[];

  @Prop()
  cw?: string[];
}

export type StoreMappingsDocument = StoreMappings & Document<StoreMappings>;
export const StoreMappingsSchema = SchemaFactory.createForClass(StoreMappings);

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: false })
  parentCode?: string;

  @Prop({ required: true, unique: true, index: true })
  code: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  index: number;

  @Prop({ required: true, type: StoreMappingsSchema })
  mappings: StoreMappings;

  @Prop({ required: true, default: false })
  isRestricted: boolean;

  @Prop({ required: true, default: true })
  isAvailable: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type CategoryDocument = Category & Document<Category>;
export const CategorySchema = SchemaFactory.createForClass(Category);
