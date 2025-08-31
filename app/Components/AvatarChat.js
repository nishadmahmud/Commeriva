'use client'

import { useState } from 'react'
import FloatingActionMenu from './FloatingActionMenu';


export default function Component() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (

    <div className="fixed cursor-pointer lg:bottom-16 bottom-10 md:right-8 right-4 z-[10000] hidden md:block">
      <div className={`transition-all duration-300 ease-in-out ${isMinimized ? 'w-14' : 'max-w-sm'}`}>
      <FloatingActionMenu />
      </div>
    </div>
  )
}





