import { Wallet } from "../../models/Wallet";

class WalletsRepository {
  async findAll() {
    const wallets = await Wallet.find();
    return wallets;
  }

  async create(ownerId: string) {
    const newWallet = new Wallet({
      ownerId,
      copper: 0,
      silver: 0,
      gold: 0,
      platinum: 0,
    });

    newWallet
      .save()
      .then((data) => data)
      .catch((err) => {
        console.log("Error: ", err);
      });
  }
}

module.exports = new WalletsRepository();
