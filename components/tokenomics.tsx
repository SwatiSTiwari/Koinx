import { Card } from "@/components/ui/card"

export function Tokenomics() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
      
      <h3 className="text-xl font-bold mb-4">Initial Distribution</h3>
      
      <div className="flex items-center gap-8 mb-6">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="20"
              fill="none"
              className="text-blue-600"
              strokeDasharray="251.2"
              strokeDashoffset="50.24"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="20"
              fill="none"
              className="text-orange-400"
              strokeDasharray="251.2"
              strokeDashoffset="200.96"
            />
          </svg>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span>Crowdsale investors: 80%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400" />
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </Card>
  )
}
