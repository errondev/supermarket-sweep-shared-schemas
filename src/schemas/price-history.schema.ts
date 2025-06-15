import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Price, PriceSchema } from './price.schema';

@Schema({ timestamps: true })
export class PriceHistory {
  @Prop({ required: true })
  storeCode: string;

  @Prop({ required: true })
  productCode: string;

  @Prop({ type: PriceSchema, required: true })
  price: Price;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type PriceHistoryDocument = PriceHistory & Document<PriceHistory>;
export const PriceHistorySchema = SchemaFactory.createForClass(PriceHistory);

// Create a compound index on price.sweepId and productCode
PriceHistorySchema.index(
  { 'price.sweepId': 1, productCode: 1 },
  { unique: true },
);
