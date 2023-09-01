import Button from "../components/elements/Button"
import Box, { BoxContent, BoxImage } from "../components/layout/Box"
import { BigHeading, MediumHeading, SmallHeading } from "../components/layout/Headings"
import HeroWrapper from "../components/layout/HeroWrapper"
import Preorder from "../components/sections/Preorder"
import Newsletter from "../components/sections/Newsletter"
import CommunityLinks from "../components/sections/CommunityLinks"

const Press = () => {
    return (
        <>
        <HeroWrapper className="flex items-center">
            <SmallHeading>Cities: Skylines II</SmallHeading>
            <BigHeading>Press</BigHeading>
        </HeroWrapper>
            <div className='my-[72px] px-4 sm:px-8 lg:px-skylines'>
            <Box>
                <BoxImage src='/press.jpg'/>
                <BoxContent>
                    <SmallHeading>For press</SmallHeading>
                    <MediumHeading>Press & Creators Assets</MediumHeading>
                    <p className="mb-6">Logotype, key art and screenshots for Cities: Skylines II for download.</p>
                    <p className="mb-6">For additional requests, please contact pr [at] paradoxinteractive.com</p>
                    <Button>
                        <span>Download presskit [ZIP]</span>
                    </Button>
                </BoxContent>
            </Box>
            </div>
            <Preorder />
            <Newsletter />
            <CommunityLinks />
        </>
    )
}

export default Press