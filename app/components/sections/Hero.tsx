import Image from "next/image"
import Button from "../elements/Button"
import { IconArrowNarrowRight, IconPlayerPlayFilled } from '@tabler/icons-react'

import background from '@/public/hero-image.jpg'
import CitiesSkylinesLogoHero from '@/public/cities-skylines-hero-logo.png'
import StorefrontContainer from "../elements/storefront/StorefrontContainer"
import { MediumHeading } from "../layout/Headings"

const Hero = () => {
    return (
        <div className='relative min-h-[360px] w-full'>
            <div className='container mx-auto text-center'>
                <div className='py-10'>
                    <div>
                        <Image src={CitiesSkylinesLogoHero} width={450} height={425} alt='CS logo' className='mx-auto'/>
                    </div>
                    <MediumHeading className="mb-0">Coming October 24</MediumHeading>
                    <div className='inline-flex flex-col mt-8 sm:flex-row'>
                        <Button link={'/buy'} className='mx-2 mt-2'>
                            <span>Pre-order now</span>
                            <IconArrowNarrowRight />
                        </Button>
                        <Button link={'https://www.youtube.com/watch?v=MX9YWu5wkGg&embeds_referring_euri=https%3A%2F%2Fwww.paradoxinteractive.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.paradoxinteractive.com'} className='mx-2 mt-2'>
                            <span>Watch trailer</span>
                            <IconPlayerPlayFilled size={16} />
                        </Button>
                    </div>
                </div>
            </div>
            <StorefrontContainer />
            <Image
                src={background}
                placeholder="blur"
                sizes='100vw'
                alt='City View'
                fill className='object-cover object-hero -z-10'
            />
        </div>
    )
}

export default Hero