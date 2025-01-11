"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface TrendingCoin {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    thumb: string
    data: {
      price_change_percentage_24h: {
        usd: number
      }
    }
  }
}

export function TrendingCoins() {
  const [trending, setTrending] = useState<TrendingCoin[]>([])

  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        )
        if (!response.ok) {
          throw new Error('Failed to fetch trending coins');
        }
        const data = await response.json();
        console.log(data); // Debugging line to check API response
        setTrending(data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    }
  
    fetchTrending();
  }, []);
  

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trending.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={coin.item.thumb}
                alt={coin.item.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-medium">
                {coin.item.name} ({coin.item.symbol.toUpperCase()})
              </span>
            </div>
            <span
              className={`px-2 py-1 rounded text-sm ${
                coin.item.data.price_change_percentage_24h.usd >= 0
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}

