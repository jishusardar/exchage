import React from 'react'
import Sidebar from './_components/sidebar'
import Header from './_components/header'

function DashboardLayout({children}) {
  return (
    <div>
      <div className='md:w-64 h-screen fixed'>
        <Sidebar/>
      </div>
        <div className='ml-64'>
          <Header/>
          <div>
            {children}
          </div>
        </div>
    </div>
  )
}

export default DashboardLayout