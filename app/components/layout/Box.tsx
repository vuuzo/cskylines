import { ReactNode } from "react"
import Container from "./Container"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

export default function Box ({ children }: { children: ReactNode }) {
  return (
    <Container className="p-[48px_16px] sm:px-0 md:px-0 lg:px-0 m-[48px_0] sm:items-center">
      {children}
    </Container>
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
