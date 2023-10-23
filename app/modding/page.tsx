import { IconArrowNarrowRight } from "@tabler/icons-react"
import Button from "../components/elements/Button"
import { BigHeading, MediumHeading, SmallHeading } from "../components/layout/Headings"
import HeroWrapper from "../components/layout/HeroWrapper"
import { TextCard } from "../components/layout/TextCard"
import CommunityLinks from "../components/sections/CommunityLinks"
import Preorder from "../components/sections/Preorder"
import Newsletter from "../components/sections/Newsletter"
import Image from "next/image"
import Container from "../components/layout/Container"
import BackgroundImage from '@/public/modding-bg.jpg'
import ParadoxLogo from '@/public/paradox-mods.png'

const ModdingPage = () => {
  return (
    <>
    <HeroWrapper className="flex items-center">
        <SmallHeading>Cities: Skylines II</SmallHeading>
        <BigHeading>Modding</BigHeading>
    </HeroWrapper>
    <Container>
    <TextCard>
      <BigHeading>You Are The Creator</BigHeading>
      <div className="grid gap-4 grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(10,1fr)] lg:grid-cols-[repeat(12,1fr)]">
        <p className="mt-4 col-span-4 sm:col-[2/span_8] lg:col-[3/span_8]">
          <b>A world of free creativity is coming soon</b><br/><br/>
          Welcome to a world of free creativity. With Mods (short for modifications) you can tailor your gaming experience to your unique preferences. Uploaded by creators all over the world, you can pick between anything. From buildings to maps, you’re able to create the city of your dreams - and our Mods platform is the place to express yourself.</p>
      </div>

      <div className="flex flex-col items-center gap-4 mt-8 lg:flex-row">
        <Button>Modding FAQ <IconArrowNarrowRight /></Button>
        <Button>Modding dev diary <IconArrowNarrowRight /></Button>
      </div>
    </TextCard>
    </Container>
    <div className='relative'>
      <Container className='items-center'> 
          <div className='z-10 py-8 col-[1/-1] row-[2/3] sm:row-[1/-1] sm:col-[1/6]'>
              <SmallHeading>CITIES: SKYLINES II MODDING</SmallHeading>
              <MediumHeading>Mods Are Now For Everyone</MediumHeading>
              <p className='mb-6'>Ready to enhance your game? Modding is an integral part of Cities: SkylinII and we want it to be available - to everyone. With Paradox Mods, you will now be able access the Modding library both on PC and Console.</p>
              <p className='mb-6'>The Modding tools are currently in Beta and will launch shortly aftrelease. In preparation, we are collaborating with a talented group of creators - ensuriyou’ll have amazing Mods to dive into on its launch.</p>
          </div>
          <div className='relative aspect-video z-10 col-[1/-1] sm:col-[6/-1]'>
              <Image src={ParadoxLogo} fill alt='section image' className='object-contain' />
          </div>
      </Container>
      
      <Image
          src={BackgroundImage}
          alt='background image'
          fill
          sizes='100vw'
          className='object-cover object-bonus'
      />
        </div>
    <CommunityLinks />
    <Preorder />
    <Newsletter />
    </>
  )
} 
export default ModdingPage