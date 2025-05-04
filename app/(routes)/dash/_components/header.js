import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Divide } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-end p-5 shadow-md'>
      <UserButton/>
    </div>
  )
}

export default Header