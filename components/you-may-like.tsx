"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

// Function to fetch coin data from CoinGecko API
async function getCoins() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
    );

    if (!response.ok) {
      console.error(`Error: HTTP status ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching coin data:", error.message);
    } else {
      console.error("Unexpected error fetching coin data:", error);
    }
    return []; // Return an empty array as fallback data
  }
}

// YouMayLike component to display coins data
export function YouMayLike() {
  interface Coin {
    id: string;
    image: string;
    name: string;
    symbol: string;
    price_change_percentage_24h: number;
    current_price: number;
    sparkline_in_7d: {
      price: number[];
    };
  }

  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    async function fetchCoins() {
      const coinData = await getCoins();
      setCoins(coinData);
    }

    fetchCoins();
  }, []);

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {coins.map((coin) => (
          <Card key={coin.id} className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={coin.image}
                alt={coin.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-medium">{coin.symbol.toUpperCase()}</span>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  coin.price_change_percentage_24h >= 0
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
            <div className="font-bold">${coin.current_price.toLocaleString()}</div>
            <div className="h-[60px] mt-2">
              <svg
                viewBox={`0 0 ${coin.sparkline_in_7d.price.length} 100`}
                className="w-full h-full"
              >
                <path
                  d={`M0 ${
                    100 -
                    (coin.sparkline_in_7d.price[0] /
                      Math.max(...coin.sparkline_in_7d.price)) *
                      100
                  } ${coin.sparkline_in_7d.price
                    .map(
                      (price, i) =>
                        `L${i} ${100 - (price / Math.max(...coin.sparkline_in_7d.price)) * 100}`
                    )
                    .join(" ")}`}
                  fill="none"
                  stroke={coin.price_change_percentage_24h >= 0 ? "#22c55e" : "#ef4444"}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}
