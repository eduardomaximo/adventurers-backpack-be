import { Schema, model, Types } from "mongoose";

interface IWallet {
  ownerId: Types.ObjectId;
  copper?: number;
  silver?: number;
  gold?: number;
  platinum?: number;
}

const walletSchema = new Schema<IWallet>(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "Adventurer",
      required: true,
    },
    copper: Number,
    silver: Number,
    gold: Number,
    platinum: Number,
  },
  { timestamps: true }
);

export const Wallet = model<IWallet>("Wallet", walletSchema);
