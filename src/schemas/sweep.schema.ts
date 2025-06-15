import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { SweepStatus } from '../enums';

@Schema({ timestamps: true, _id: true })
export class Sweep {
  @Prop({ type: String, required: true })
  storeCode: string;

  @Prop({
    type: String,
    enum: SweepStatus,
    default: SweepStatus.INITIATED,
    required: true,
  })
  status: SweepStatus;

  @Prop({ required: false })
  finishedAt?: Date;

  @Prop({ required: false })
  dealsEndedAt?: Date;

  @Prop({ required: false })
  productCount?: number;

  @Prop({ required: false })
  errorMessage?: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type SweepDocument = Sweep & Document<Sweep>;
export const SweepSchema = SchemaFactory.createForClass(Sweep);
