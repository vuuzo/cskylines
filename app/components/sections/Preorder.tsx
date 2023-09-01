'use client'

import Image from 'next/image'
import Button from '../elements/Button'

import BonusImage from '@/public/bonues-image.png'
import BackgroundImage from '@/public/bonus-background-image.jpg'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import Container from '../layout/Container'
import { MediumHeading, SmallHeading } from '../layout/Headings'


const Preorder = () => {
    return (
        <div className='relative'>
            <Container className='items-center'> 
                <div className='z-10 col-[1/-1] row-[2/3] py-6 sm:row-[1/-1] sm:col-[1/6]'>
                    <SmallHeading>Pre-order bonus</SmallHeading>
                    <MediumHeading>9 Unique Landmark Buildings + Tampere Map</MediumHeading>
                    <p className='mb-6'>Pre-order today and set your City apart with 9 Unique Buildings based on famous landmarks from around the world. Included is also a map based on the geography of Tampere, Finland, home of Colossal Order.</p>
                    <p className='mb-6'>The Landmark Buildings include The London Eye, Notre Dame, National Gallery, Grand Hotel, Botanical Garden, Näsinneula, Xi'an Bell Tower, Sungnye and National Diet.</p>
                    <Button link='/buy'>
                        <span>Pre-order now</span>
                        <IconArrowNarrowRight />
                    </Button>
                </div>
                <div className='relative aspect-square z-10 col-[1/-1] sm:col-[6/-1]'>
                    <Image src={BonusImage} fill alt='section image' className='object-cover' />
                </div>
            </Container>
            
            {/* Background Image */}
            <Image
                src={BackgroundImage}
                alt='background image'
                fill
                sizes='100vw'
                className='object-cover object-bonus'
            />
        </div>
    )
}

export default Preorder