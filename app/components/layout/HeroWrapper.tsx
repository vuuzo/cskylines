import Image from "next/image"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const HeroWrapper = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={twMerge('relative min-h-[360px] w-full bg-black bg-opacity-30', className)}>
      <div className='container mx-auto text-center'>
        <div className='py-10'>
          { children }          
        </div>
      </div>
      <Image src={'/hero-image.jpg'} sizes='100vw' alt='City View' fill className='object-cover [object-position:center]  -z-10' />
    </div>
  )
} 

export default HeroWrapper