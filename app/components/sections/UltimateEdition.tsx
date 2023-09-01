import Image from "next/image"
import Container from "../layout/Container"

import RoadmapImage from '@/public/cs-roadmap.png'
import Button from "../elements/Button"
import { IconArrowNarrowRight } from "@tabler/icons-react"

import UltimateEditionBackground from '@/public/ultimate-edition-background.jpg'
import { MediumHeading } from "../layout/Headings"

const UltimateEdition = () => {
    return (
        <Container className='relative'>
            <Image src={UltimateEditionBackground} alt='ultimate edition background' fill className='object-cover -z-10 object-bonus' />
            <div className='flex flex-col items-center col-[1/-1] py-12 sm:col-[2/-2] md:col-[3/-3]'>
                <MediumHeading className="text-skylines_dark text-center mb-0">Cities: Skylines II Ultimate Edition</MediumHeading>
                <div className='mt-12 mb-5 text-skylines_dark sm:mt-0'>
                    <p className='my-6 text-center'>Cities: Skylines II: Ultimate Edition gives you access to the Base Game and the Expansion Pass including the San Francisco Set, Beach Properties Asset Pack, two Content Creator Packs, the Bridges & Ports Expansion as well as 3 Radio Stations paired with each release.</p>
                    <Image src={RoadmapImage} alt='roadmap'/>
                </div>
                <Button link='/buy' className='mt-12'>
                    <span>Pre-order ultimate edition</span>
                    <IconArrowNarrowRight />
                </Button>
            </div>
        </Container>
    )
}

export default UltimateEdition