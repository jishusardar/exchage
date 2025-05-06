import React from 'react'
import { OrbitingCirclesDemo } from './herotable'
import { UserButton, useUser } from '@clerk/nextjs'
import Topgainer, { HoverEffect } from './topgainer';
import Pricechart from './pricechart';
import Trending from './trending';
import { Mobilerotm } from './rotm';

function Hero() {
  const {user,isSignedIn}=useUser();
  return (
    <div>
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
  <div
    className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div className="max-w-prose text-left">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
        Buy And Hold
        <strong className="text-indigo-600"> Crypto  At Anion Exchnage </strong>
        Strong Community

      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
      Anion Exchange is one of the crypto Exchange currently in demo mode
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
      {isSignedIn?
      <a
      className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
      href={'/dash'}
    >
      DashBoard
    </a>: 
      <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href={'/sign-in'}
        >
          Get Started
        </a>
}
      </div>
    </div>
    <div className='className="mx-auto hidden max-w-md text-gray-900 md:block dark:text-white"'>
      <OrbitingCirclesDemo/>
    </div>
  </div>
</section>
<div className='flex justify-center gap-10'>
<div className="lg:hidden md:hidden">
  <Mobilerotm/>
  </div>
  <Topgainer/>
<Pricechart/>
<Trending/>
</div>
    </div>
  )
}

export default Hero