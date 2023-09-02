import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
    children: ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={twMerge('px-4 grid grid-cols-skylines-4 gap-4 sm:grid-cols-skylines-10 sm:px-8 md:grid-cols-skylines-12 lg:gap-8 lg:px-skylines', className)}
        >
            {children}
        </div>
    )
}

export default Container