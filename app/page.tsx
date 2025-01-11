import { Suspense } from 'react'
import { CoinHeader } from "@/components/coin-header"
import { TradingViewChart } from "@/components/trading-view-chart"
import { AboutSection } from "@/components/about-section"
import { Sentiment } from "@/components/sentiment"
import { Tokenomics } from "@/components/tokenomics"
import { TeamSection } from "@/components/team-section"
import { GetStartedCard } from "@/components/get-started-card"
import { YouMayLike } from "@/components/you-may-like"
import { Performance } from "@/components/performance"
import { unstable_noStore as noStore } from 'next/cache'

export default async function Page() {
  noStore() // Disable caching for this route

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <span>Cryptocurrencies</span>
            <span>{">"}</span>
            <span className="text-black">Bitcoin</span>
          </div>
          <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100 rounded-lg" />}>
            <CoinHeader />
          </Suspense>
          <TradingViewChart />
          <div className="flex overflow-x-auto bg-white rounded-lg p-4 shadow-sm">
            <nav className="space-x-6">
              {["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"].map(
                (item) => (
                  <button
                    key={item}
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    {item}
                  </button>
                )
              )}
            </nav>
          </div>
          <Performance />
          <AboutSection />
          <Sentiment />
          <Tokenomics />
          <TeamSection />
          <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100 rounded-lg" />}>
            <YouMayLike />
          </Suspense>
        </div>
        <div className="lg:w-80 w-full space-y-6">
          <GetStartedCard />
          <Suspense fallback={<div className="h-48 animate-pulse bg-gray-100 rounded-lg" />}>
            <CoinHeader />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
