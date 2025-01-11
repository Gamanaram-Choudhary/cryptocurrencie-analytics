import express from "express";
import Crypto from "../models/Crypto.js";

const statsController = async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin)
      return res.status(400).json({ error: "Coin parameter is required" });

    const latestRecord = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
    if (!latestRecord)
      return res
        .status(404)
        .json({ error: "No data found for the specified coin" });

    res.json({
      price: latestRecord.price,
      marketCap: latestRecord.marketCap,
      change24h: latestRecord.change24h,
    });
  } catch (error) {
    console.error("Error in statsController:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
};

export default statsController;
