import { Schema, model, Types } from "mongoose";

interface IItem {
  name: string;
  amount: number;
  description?: string;
  weight?: number;
}

interface IBackpack {
  ownerId: Types.ObjectId;
  items: IItem[];
}

const itemSchema = new Schema<IItem>(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: String,
    weight: Number,
  },
  { timestamps: true }
);

const backpackSchema = new Schema<IBackpack>(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: "Adventurer", required: true },
    items: [itemSchema],
  },
  { timestamps: true }
);

export const Backpack = model<IBackpack>("Backpack", backpackSchema);
