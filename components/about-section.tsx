import { Card } from "@/components/ui/card"
import Image from "next/image";

export function AboutSection() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">About Bitcoin</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2">What is Bitcoin?</h3>
          <p className="text-gray-600">
            Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="text-gray-600 mt-4">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-6">Already Holding Bitcoin?</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6">
            <div className="relative z-10">
              <h4 className="text-lg font-semibold mb-4">Calculate your Profits</h4>
              <button className="inline-flex items-center bg-white text-teal-600 px-4 py-2 rounded-lg">
                Check Now <span className="ml-2">→</span>
              </button>
            </div>
            <Image
              src="/components/images/s.png"
              alt="Trading chart"
              width={300}
              height={200}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white p-6">
            <div className="relative z-10">
              <h4 className="text-lg font-semibold mb-4">Calculate your tax liability</h4>
              <button className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-lg">
                Check Now <span className="ml-2">→</span>
              </button>
            </div>
            <Image
              src="/coinheader.png"
              alt="Tax calculation interface"
              width={300}
              height={200}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>
        </div>
        <p className="text-gray-600">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>
    </Card>
  )
}

