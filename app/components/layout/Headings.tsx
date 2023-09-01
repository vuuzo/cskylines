import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  className?: string
}

export const MediumHeading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h3 className={twMerge('block font-city mb-6 text-[1.5rem] leading-[1.16] lg:text-[2rem] lg:leading-[1.12]', className)}>{children}</h3>
  )
}

export const SmallHeading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h4 className={twMerge('block uppercase font-semibold text-[1rem] leading-[1] mb-4', className)}>{children}</h4>
  )
}

export const BigHeading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h2 className={twMerge('block font-city text-[2rem] leading-[1.18] lg:text-[2.5rem] lg:leading-[1.1]', className)}>{children}</h2>
  )
}
