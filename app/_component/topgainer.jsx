import React from 'react'
import { BellRing, Bitcoin, Check, DollarSignIcon, Satellite, TrendingUp } from "lucide-react"
 
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
import { SiBinance, SiDogecoin, SiElectron, SiPolygon, SiStellar } from 'react-icons/si'
 
const notifications = [
  {
    title: "Ethereum",
    description: <FaEthereum />,
  },
  {
    title: "Trx",
    description:<SiElectron /> ,
  },
  {
    title: "Polygon",
    description: <SiPolygon />,
  },
  {
    title: "XRP",
    description: <Satellite/>,
  },
  {
    title: "Dogecoin",
    description: <SiDogecoin/>,
  },
  {
    title: "Binance",
    description: <SiBinance/>,
  },
  {
    title: "Steller",
    description: <SiStellar/>,
  },
]
function Topgainer() {
  return (
      <Card className='w-[300px] hidden md:block'>
      <CardHeader>
        <CardTitle>Top Perfomers</CardTitle>
        <CardDescription>Todays Top Performer</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Bitcoin />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Bitcoin
            </p>
            <p className="text-sm text-muted-foreground">
              #1
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

export default Topgainer