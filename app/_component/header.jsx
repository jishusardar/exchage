"use client"
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


function Header() {
  const {user,isSignedIn}=useUser();
  return (
    <div><header className="bg-white dark:bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a className="block text-teal-600 dark:text-teal-300" href="#">
            <span className="sr-only">Home</span>
            <Image src={'/logo.svg'} width={120} height={200} alt='logo'/>
          </a>
        </div>
  
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/sign-in"
                >
                  Services
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/sign-in"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
  
          <div className="relative hidden md:block">
          {isSignedIn?
      <UserButton/> : 
      <Link href={'/sign-in'}>
      <Button>Get Started</Button>
      </Link>
    }
          </div>
        </div>
      </div>
    </div>
  </header></div>
  )
}

export default Header