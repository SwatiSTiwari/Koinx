import { unstable_noStore as noStore } from 'next/cache'
import Image from "next/image"
import { Card } from "@/components/ui/card"

async function getCoinData() {
  noStore()
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
  )
  
  if (!response.ok) {
    throw new Error('Failed to fetch coin data')
  }
  
  return response.json()
}

export async function CoinHeader() {
  const coinData = await getCoinData()

  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <Image
          src="/coinheader.png"
          alt="Bitcoin"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Bitcoin</h1>
          <span className="text-gray-500">BTC</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">Rank #1</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">
            ${coinData.bitcoin.usd.toLocaleString()}
          </span>
          <span
            className={`px-2 py-1 rounded text-sm ${
              coinData.bitcoin.usd_24h_change >= 0
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {coinData.bitcoin.usd_24h_change.toFixed(2)}%
          </span>
        </div>
        <div className="text-gray-500 mt-1">
          ₹{coinData.bitcoin.inr.toLocaleString()}
        </div>
      </div>
    </Card>
  )
}

