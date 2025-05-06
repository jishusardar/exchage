import { Button } from '@/components/ui/button'
import React from 'react'

function TransactionHistoryContent() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full h-screen">
      <Button>
      <h1 className='text-lg justify-center'>Transaction History</h1></Button>
    </div>
  )
}

export default TransactionHistoryContent