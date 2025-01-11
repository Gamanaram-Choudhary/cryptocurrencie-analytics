
# **Cryptocurrencie-Analytics**  
_A Real-time Cryptocurrency Data Analytics Platform_

## **Table of Contents**  
- [Introduction](#introduction)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [APIs](#apis)  
  - [Stats API](#stats-api)  
  - [Deviation API](#deviation-api)  
- [Future Enhancements](#future-enhancements)  

---

## **Introduction**  
Cryptocurrencie-Analytics is a server-side application built using **Node.js** and **MongoDB**. It fetches real-time cryptocurrency data such as price, market capitalization, and 24-hour percentage changes for Bitcoin, Ethereum, and Matic from the **CoinGecko API**, and stores the data for analysis.  

---

## **Features**  
- **Background Data Fetching**: Automatically fetches cryptocurrency data every 2 hours and stores it in a database.  
- **Stats API**: Provides the latest data (price, market cap, and 24-hour change) for a requested cryptocurrency.  
- **Deviation API**: Calculates the standard deviation of the price for the last 100 records of a requested cryptocurrency.  
- **Modular Design**: Extensible architecture to allow for easy feature addition.  

---

## **Technologies Used**  
- **Backend Framework**: Node.js, Express.js  
- **Database**: MongoDB (with Atlas integration ready)  
- **Scheduler**: Node-cron for periodic background jobs  
- **HTTP Client**: Axios for interacting with the CoinGecko API  

---

## **Installation**  

1. Clone the repository:  
   ```bash
   https://github.com/Gamanaram-Choudhary/cryptocurrencie-analytics.git
   cd cryptocurrencie-analytics
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up your environment variables:  
   Create a `.env` file in the root directory and add:  
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-uri
   ```  

4. Start the application:  
   - For development:  
     ```bash
     npm run dev
     ```  
   - For production:  
     ```bash
     npm start
     ```

---

## **Usage**

Once the application is running, you can use the following APIs:  

### **Stats API**  
Fetch the latest data for a cryptocurrency.  

**Endpoint**:  
`GET /api/stats`  

**Query Parameters**:  
- `coin`: Name of the cryptocurrency (`bitcoin`, `ethereum`, `matic-network`)

**Sample Request**:  
```bash
curl "http://localhost:5000/api/stats?coin=bitcoin"
```  

**Sample Response**:  
```json
{
  "price": 40000,
  "marketCap": 800000000,
  "change24h": 3.4
}
```  

---

### **Deviation API**  
Fetch the standard deviation of the price for the last 100 records of a cryptocurrency.  

**Endpoint**:  
`GET /api/deviation`  

**Query Parameters**:  
- `coin`: Name of the cryptocurrency (`bitcoin`, `ethereum`, `matic-network`)

**Sample Request**:  
```bash
curl "http://localhost:5000/api/deviation?coin=bitcoin"
```  

**Sample Response**:  
```json
{
  "deviation": 4082.48
}
```  

---