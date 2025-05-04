import React from 'react'
import { BellRing, Bitcoin, Check, DollarSignIcon, TrendingUp } from "lucide-react"
import { GiBull } from "react-icons/gi";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { FaEthereum, FaEthernet } from 'react-icons/fa'
import { SiElectron, SiPolygon } from 'react-icons/si'
 
const notifications = [
  {
    title: "Ethereum",
    description: '$1,831.47',
  },
  {
    title: "Trx",
    description:'$0.2474' ,
  },
  {
    title: "Polygon",
    description: '$1.00',
  },
  {
    title: "XRP",
    description: '$2.18',
  },
  {
    title: "Dogecoin",
    description: '$0.34',
  },
  {
    title: "Binance",
    description: '$593.21',
  },
  {
    title: "Steller",
    description: '$0.2680',
  },
]
function Pricechart() {
  return (
      <Card className='w-[300px] hidden md:block'>
      <CardHeader>
        <CardTitle>Price Charts</CardTitle>
        <CardDescription>Market is bullish now<GiBull /> </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Bitcoin />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Bitcoin
            </p>
            <p className="text-sm text-muted-foreground">
            $95,510.06
            </p>
          </div>
          <TrendingUp />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default Pricechart