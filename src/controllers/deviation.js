import express from "express";
import Crypto from "../models/Crypto.js";

function calculateStandardDeviation(prices) {
  const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const variance =
    prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
    prices.length;
  return Math.sqrt(variance);
}

const deviationController = async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin)
      return res.status(400).json({ error: "Coin parameter is required" });

    const records = await Crypto.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100);
    if (records.length === 0)
      return res
        .status(404)
        .json({ error: "No data found for the specified coin" });

    const prices = records.map((record) => record.price);
    const deviation = calculateStandardDeviation(prices);

    res.json({ deviation: deviation.toFixed(2) });
  } catch (error) {
    console.error("Error in deviationController:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
};

export default deviationController;
