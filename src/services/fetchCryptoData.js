import axios from "axios";

async function fetchCryptoData() {
  const coins = ["bitcoin", "matic-network", "ethereum"];
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(
    ","
  )}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default fetchCryptoData;
