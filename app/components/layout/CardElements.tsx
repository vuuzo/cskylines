import { IconArrowNarrowRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"


export const Card = ({ children, link, className }: { children: React.ReactNode, link: string, className?: string }) => {
  if (link) {
      return (<Link href={link} className={twMerge('group flex flex-col', className)}>{ children }</Link>)}
    else {
      return (<div className={twMerge('group flex flex-col', className)}>{ children }</div>)
  }
}

export const CardImage = ({ src, className }: { src: string , className?: string }) => {
  return (
    <div className={twMerge('relative w-full aspect-video', className)}>
      <Image
          src={src}
          alt='image preview'
          fill
          sizes='100vw'
          className='object-cover'
      />
    </div>
  )
}

export const CardContent = ({ children, arrow=true, className }: { children: React.ReactNode, arrow?: boolean, className?: string }) => {
  return (
  <div className={twMerge('p-6 flex justify-between flex-1', className)}>
    <div>
      { children }
    </div>
    { arrow &&
        <div className='ml-6 flex items-end'>
            <IconArrowNarrowRight className='group-hover:bg-white group-hover:text-black transition-colors' />
        </div>
    }
  </div>)
}

export const Title = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <h3 className={twMerge('text-[20px] font-city leading-6 lg:text-[1.5rem]', className)}>{ children }</h3>
}

export const SecondaryText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <h4 className={twMerge('block mb-[10px] text-xs font-semibold tracking-wider uppercase', className)}>{ children }</h4>
}

export const Text = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <h4 className={twMerge('mt-[10px] leading-5', className)}>{ children }</h4>
}





