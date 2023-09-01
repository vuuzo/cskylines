'use client'

import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react"
import Button from "./Button"
import { useState } from "react"


const Carousel = ({ children: slides }: { children: JSX.Element[] }) => {
    const [index, setIndex] = useState(0)

    const prevSlide = () => setIndex((index) => (index === 0 ? slides.length - 1 : --index))
    const nextSlide = () => setIndex((index) => (index === slides.length - 1 ? 0 : ++index))

    return (
        <div className='col-[1/-1] sm:col-[2/-2] lg:col-[2/-2]'>
            <div className='relative flex flex-col mt-8'>
                {/* SLIDES */}
                <div
                    className="relative rounded-md overflow-hidden"
                >
                    <div
                        className="flex transition-all ease-in-out duration-500"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        { slides }
                    </div>
                </div>
                {/* NAVIGATION */}
                <div className='flex items-center justify-center mt-[32px]'>
                    <Button
                        onClick={ prevSlide }
                        className='cursor-pointer min-w-0 min-h-0 p-2 disabled:opacity-30 disabled:hover:opacity-30'>
                        <IconArrowNarrowLeft />
                    </Button>
                    <span className='mx-[32px]'>{index + 1}/{slides.length}</span>
                    <Button
                        onClick={ nextSlide }
                        className='cursor-pointer min-w-0 min-h-0 p-2 disabled:opacity-30 disabled:hover:opacity-30'>
                        <IconArrowNarrowRight />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Carousel