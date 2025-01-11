import { Card } from "@/components/ui/card";
import { ArrowRight, Newspaper } from 'lucide-react';

export function Sentiment() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">Sentiment</h2>
        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs">i</div>
      </div>

      <h3 className="text-lg font-semibold mb-4">Key Events</h3>
      
      <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
        <Card className="flex-1 p-4 bg-blue-50 border-0">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        </Card>

        <Card className="flex-1 p-4 bg-green-50 border-0">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <h3 className="text-lg font-semibold mb-4">Analyst Estimates</h3>
      <div className="flex items-center gap-8">
        <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
          <span className="text-3xl font-bold text-green-600">76<span className="text-xl">%</span></span>
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-8">Buy</span>
            <div className="flex-1 h-2 bg-green-500 rounded" />
            <span>76%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-8">Hold</span>
            <div className="flex-1 h-2 bg-gray-200 rounded" style={{ width: '8%' }} />
            <span>8%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-8">Sell</span>
            <div className="flex-1 h-2 bg-red-500 rounded" style={{ width: '16%' }} />
            <span>16%</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
