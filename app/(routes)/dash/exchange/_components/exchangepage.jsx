import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { BitcoinIcon, PercentIcon} from 'lucide-react'

function ExchnagePage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full h-screen"> 
      <Button>
      <h1 className='text-lg justify-center'> Market Orders</h1></Button>
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]"> Name </TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Growth</TableHead>
        <TableHead>Total Volume</TableHead>
        <TableHead>Total Circulation</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium flex"><BitcoinIcon size={'18'}/>Bitcoin</TableCell>
        <TableCell>$100k</TableCell>
        <TableCell className={'flex'}>+1.5<PercentIcon size={'12'}/></TableCell>
        <TableCell>2M</TableCell>
        <TableCell>$250.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </div>
  )
}

export default ExchnagePage