import { Router } from "express";

const WalletController = require("./app/controllers/WalletController");

const router = Router();

// Wallet

router.post("/:id/wallet", WalletController.store);
router.get("/wallet", WalletController.index);

module.exports = router;
