import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Price, PriceSchema } from './price.schema';

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  storeCode: string;

  @Prop({ required: true, unique: true, index: true })
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  productUrl: string;

  @Prop({ required: false })
  packageSize?: string;

  @Prop({ type: [String], default: [] })
  categoryCodes: string[];

  @Prop({ required: true, default: false })
  isRestricted: boolean;

  @Prop({ required: true, default: true })
  isAvailable: boolean;

  @Prop({ type: PriceSchema, required: false })
  price?: Price;

  @Prop({ type: [String], default: [] })
  originalImageUrls: string[];

  @Prop({ type: [String], default: [] })
  imageUrls: string[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type ProductDocument = Product & Document<Product>;
export const ProductSchema = SchemaFactory.createForClass(Product);
