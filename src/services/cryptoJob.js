import cron from "node-cron";
import Crypto from "../models/Crypto.js";
import fetchCryptoData from "./fetchCryptoData.js";

const scheduleCryptoJob = () => {
  cron.schedule("* */2 * * *", async () => {
    try {
      // console.log("Running background job...");

      const data = await fetchCryptoData();
      console.log("Fetched data:", data);

      const coins = Object.keys(data);

      for (const coin of coins) {
        const {
          usd: price,
          usd_market_cap: marketCap,
          usd_24h_change: change24h,
        } = data[coin];

        await Crypto.create({ coin, price, marketCap, change24h });
      }

      // console.log("Data updated successfully");
    } catch (error) {
      console.error("Error during background job execution:", error);
    }
  });
};

export default scheduleCryptoJob;
