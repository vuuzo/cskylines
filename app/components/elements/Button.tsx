import Link from "next/link"
import { ReactNode, ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
    children: ReactNode
    link?: string
    className?: string
} & ComponentProps<'button'>

const Button = ({ children, link, className, ...restProps }: ButtonProps) => {
    if (link) return (
        <Link
            href={link}
            className={twMerge('inline-flex gap-2 min-h-[3.5rem] min-w-[8rem] items-center rounded-[2px] py-2 px-6 tracking-wider bg-cta-pattern border border-skylines_yellow uppercase font-semibold text-base text-skylines hover:opacity-70 xs:hover:opacity-100', className)}
        >
            { children }
        </Link>
    )

    return (
        <button
            {...restProps}
            className={twMerge('inline-flex gap-2 min-h-[3.5rem] min-w-[8rem] items-center rounded-[2px] py-2 px-6 tracking-wider bg-cta-pattern border border-skylines_yellow uppercase font-semibold text-base text-skylines hover:opacity-70 xs:hover:opacity-100', className)}
        >
        { children }
        </button>
    )
}

export default Button