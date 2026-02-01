import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false })
export class PriceHistory {
  @Prop({ required: true })
  productCode: string;

  @Prop({ required: true })
  sweepDate: Date;

  @Prop({ required: true })
  price: number;
}

export type PriceHistoryDocument = PriceHistory & Document<PriceHistory>;
export const PriceHistorySchema = SchemaFactory.createForClass(PriceHistory);

// Compound unique index on productCode and sweepDate
PriceHistorySchema.index({ productCode: 1, sweepDate: 1 }, { unique: true });

// Index for querying all prices on a specific date
PriceHistorySchema.index({ sweepDate: 1 });
