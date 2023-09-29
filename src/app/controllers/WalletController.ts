import { Request, Response } from "express";
const WalletsRepository = require("../repositories/WalletsRepository");

class WalletController {
  async index(req: Request, res: Response) {
    const wallets = await WalletsRepository.findAll();

    res.json(wallets);
  }

  async store(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const wallet = await WalletsRepository.create(id);
      res.status(201).json(wallet);
    } catch {}
  }
}

module.exports = new WalletController();
