import { Schema, model, Types } from "mongoose";

interface IAdventurer {
  name: string;
  id: Types.ObjectId;
  role: "admin" | "dungeon-master" | "player";
}

const adventurerSchema = new Schema<IAdventurer>(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Adventurer = model<IAdventurer>("Adventurer", adventurerSchema);
