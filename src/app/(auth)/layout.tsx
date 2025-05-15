import ThemeToggle from '@/components/ThemeToggle'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <ThemeToggle />
        {children}
    </div>
  )
}

export default layout