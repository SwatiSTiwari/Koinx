import { Card } from "@/components/ui/card"

export function Performance() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Performance</h2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Today&apos;s Low</span>
            <span>Today&apos;s High</span>
          </div>
          <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded">
            <div className="absolute -top-3 left-[60%] transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800 mx-auto" />
              <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                $48,637.83
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <span>46,930.22</span>
            <span>49,343.83</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded" />
          <div className="flex justify-between">
            <span>16,930.22</span>
            <span>49,743.83</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Fundamentals</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Bitcoin Price</span>
              <span>$16,815.46</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">24h Low / 24h High</span>
              <span>$16,382.07 / $16,874.12</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">7d Low / 7d High</span>
              <span>$16,382.07 / $16,874.12</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Trading Volume</span>
              <span>$23,249,202,782</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Market Cap Rank</span>
              <span>#1</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Market Cap</span>
              <span>$323,507,290,047</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Market Cap Dominance</span>
              <span>38.343%</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Volume / Market Cap</span>
              <span>0.0718</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">All-Time High</span>
              <div className="text-right">
                <div>$69,044.77 <span className="text-red-500">-75.6%</span></div>
                <div className="text-sm text-gray-500">Nov 10, 2021 (about 1 year)</div>
              </div>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">All-Time Low</span>
              <div className="text-right">
                <div>$67.81 <span className="text-green-500">24729.1%</span></div>
                <div className="text-sm text-gray-500">Jul 06, 2013 (over 9 years)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

