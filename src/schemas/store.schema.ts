import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Store {
  // This is the latest sweep that has been processed for this store
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Sweep', required: false })
  sweepId?: mongoose.Types.ObjectId;

  @Prop({ required: true, unique: true, index: true })
  code: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type StoreDocument = Store & Document<Store>;
export const StoreSchema = SchemaFactory.createForClass(Store);
