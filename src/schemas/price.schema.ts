import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { BestPriceLocation } from '../enums';

/**
 * Price is a subdocument of Product, so it does not have its own timestamps.
 * It is embedded in the Product document.
 * It is not a separate collection in the database.
 * Price History instead is a separate collection in the database.
 */
@Schema({ id: false, _id: false, timestamps: false })
export class Price {
  @Prop({ type: Types.ObjectId, ref: 'Sweep', required: true })
  sweepId: Types.ObjectId;

  @Prop({ required: true, default: 0 })
  price: number;

  @Prop({ required: false })
  wasPrice?: number;

  @Prop({ required: false })
  cupPrice?: number;

  @Prop({ required: false })
  cupMeasure?: string;

  @Prop({ required: false })
  multibuyPrice?: number;

  @Prop({ required: false })
  multibuySinglePrice?: number;

  @Prop({ required: false })
  multibuyQuantity?: number;

  @Prop({ required: false })
  multibuyCupPrice?: number;

  @Prop({ required: false })
  discountRate?: number;

  @Prop({
    type: String,
    enum: BestPriceLocation,
    required: true,
    default: BestPriceLocation.UNKNOWN,
  })
  bestPriceLocation: BestPriceLocation;

  @Prop({ required: true })
  isInstoreOnly: boolean;

  @Prop({ required: true })
  isOnlineOnly: boolean;

  @Prop({ required: true })
  isMultibuy: boolean;

  @Prop({ required: true })
  isHalfPrice: boolean;

  @Prop({ required: true })
  isSpecial: boolean;
}

export type PriceDocument = Price & Document<Price>;
export const PriceSchema = SchemaFactory.createForClass(Price);
