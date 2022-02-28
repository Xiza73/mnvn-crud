import { Schema } from 'mongoose';

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: String,
    imgURL: String,
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);
