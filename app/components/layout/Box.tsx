import { ReactNode } from "react"
import Container from "./Container"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

export default function Box ({ children }: { children: ReactNode }) {
  return (
    <div className="m-[48px_0] p-[48px_0] px-4 grid items-center grid-cols-skylines-4 gap-4 sm:m-[64px_0] sm:p-[72px_0] sm:grid-cols-skylines-10 sm:px-8 md:grid-cols-skylines-12 lg:gap-8">
      {children}
    </div>
  )
}

export const BoxImage = ({ src, className }: { src: string, className?: string }) => {
  return (
    <div className={twMerge("relative w-full aspect-video order-1 col-[1/-1] sm:col-[6/span_4] sm:order-2 md:col-[span_5/-2]", className)}>
      <Image src={ src } alt="img" fill className="object-cover absolute"/>
    </div>
  )
}

export const BoxContent = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={twMerge("relative w-full aspect-video order-1 col-[1/-1] sm:col-[2/span_3] sm:order-1 md:col-[2/span_4]", className)}>
      <div className="col-[1/-1] order-2 sm:col-[2/span_3] md:col-[2/span_4]">
        { children }
      </div>
    </div>
  )
}
