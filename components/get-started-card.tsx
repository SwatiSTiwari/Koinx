"use client";
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export function GetStartedCard() {
//   return (
//     <Card className="p-6 bg-blue-600 text-white">
//       <h2 className="text-2xl font-bold text-center mb-4">
//         Get Started with KoinX for FREE
//       </h2>
//       <p className="text-center mb-6">
//         With our range of features that you can equip for free, KoinX allows you to be
//         more educated and aware of your tax reports.
//       </p>
//       <div className="flex justify-center mb-6">
//         <Image
//           src="/components/images/getstarted.png"
//           alt="Get Started"
//           width={200}
//           height={200}
//           className="rounded-lg"
//         />
//       </div>
//       <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
//         Get Started for FREE →
//       </Button>
//     </Card>
//   )
// }




import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Coin {
  id: string
  name: string
  symbol: string
  image: string
  price_change_percentage_24h: number
}

async function getCoins() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
    )

    if (!response.ok) {
      throw new Error("Failed to fetch coins")
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching coin data:", error)
    return [] // Return an empty array or some fallback data
  }
}

export function GetStartedCard() {
  const [coins, setCoins] = useState<Coin[]>([])

  useEffect(() => {
    async function fetchCoins() {
      const coinData = await getCoins()
      setCoins(coinData.slice(0, 3)) // Limit to top 3 coins
    }

    fetchCoins()
  }, [])

  return (
    <Card className="p-6">
      <div className="bg-blue-600 text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Get Started with KoinX for FREE
        </h2>
        <p className="text-center mb-6">
          With our range of features that you can equip for free, KoinX allows you to be
          more educated and aware of your tax reports.
        </p>
        <div className="flex justify-center mb-6">
          <Image
            src="/getstarted.png"
            alt="Get Started"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
          Get Started for FREE →
        </Button>
      </div>

      <h2 className="text-2xl font-bold mb-6">Treding coins</h2>
      <div className="space-y-4">
      {coins.map((coin, index) => (
  <div key={coin.id || index} className="flex items-center justify-between mb-4">
    <div className="flex items-center">
      <Image
        src={coin.image}
        alt={coin.name}
        width={24}
        height={24}
        className="rounded-full"
      />
      <span className="ml-2">
        {coin.name} ({coin.symbol.toUpperCase()})
      </span>
    </div>
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
))}
      </div>
    </Card>
  )
}
