import React from 'react'
import { BellRing, Bitcoin, Check, DollarSignIcon, PercentIcon, TrendingUp } from "lucide-react"
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
    title: "As Roma Fan Token",
    description: '$1.88',
  },
  {
    title: "Pi",
    description:'0.5935',
  },
  {
    title: "Arcblovk",
    description: '$1.22',
  },
  {
    title: "Dexe",
    description: '$14.38',
  },
  {
    title: "Deepseek Protocol",
    description: '$0.18',
  },
  {
    title: "STP",
    description: '$0.07',
  },
  {
    title: "Berachain",
    description: '$2.87',
  },
]
function Trending() {
  return (
      <Card className='w-[300px]'>
      <CardHeader>
        <CardTitle>Trending</CardTitle>
        <CardDescription>Market 50<PercentIcon/> Bear 50<PercentIcon/><GiBull /> </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Bitcoin />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Solayer
            </p>
            <p className="text-sm text-muted-foreground">
            $3.16
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

export default Trending