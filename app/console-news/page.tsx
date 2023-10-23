import HeroWrapper from "../components/layout/HeroWrapper"
import { SmallHeading, BigHeading, MediumHeading } from "../components/layout/Headings"
import CommunityLinks from "../components/sections/CommunityLinks"
import Image from "next/image"
import Button from "../components/elements/Button"
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { TextCard } from "../components/layout/TextCard"

const ConsoleNewsPage = () => {
  return (
    <>
    <HeroWrapper className="flex items-center">
        <SmallHeading>Cities: Skylines II</SmallHeading>
        <BigHeading>Console News</BigHeading>
    </HeroWrapper>
        <div className='my-[72px] px-4 sm:px-8 lg:px-skylines'>
          <div className={`
            grid grid-cols-[repeat(4,1fr)] gap-x-4
            sm:grid-cols-[repeat(10,1fr)]
            lg:grid-cols-[repeat(12,1fr)]
          `}>
              <div className="col-[1/span_4]">
                  <SmallHeading>Cities: Skylines II</SmallHeading>
                  <MediumHeading>Update on Console Release Window</MediumHeading>
              </div>
              <div className="col-span-4 sm:col-[6/span_5] lg:col-[6/span_7]">
                <div className="relative w-full aspect-[3/1]">
                  <Image alt="image" src={'/console-note.png'} fill className="object-cover absolute"/>
                </div>
                <p className="mt-8">
                Hello City Building Enthusiasts!<br/><br/>

                We are sharing an update with you on the upcoming launch of Cities: Skylines II.<br/><br/>

                We are hard at work preparing the game for our release on October 24th. While doing so, we have realized that we need more time to reach the quality targets we have set for Console. As we want to provide the best experience for our players, we are updating the release window for Xbox and PS5 to Spring 2024.<br/><br/>

                The additional time allows us to focus on matching the quality and performance across all platforms.<br/><br/>
                We’ll share more updates on the console release window soon.<br/>
                As work on optimization continues, we’re also updating the minimum and recommended PC specs.<br/>
                If you have remaining questions, please find our <a className="font-bold underline" href="#">FAQ here</a>.<br/><br/>

                In the meantime, we are excited to welcome PC players to build their dream cities on October 24.<br/><br/>

                Happy Building!<br/>
                Colossal Order & Paradox Interactive 
                </p>
              </div>
          </div>
        </div>

      <TextCard>
        <BigHeading>Wishlist on Console</BigHeading>
        <p className="mt-4">You can still wishlist Cities: Skylines II on PS5 and Xbox below!</p>
        <div className="flex flex-col items-center gap-4 mt-8 lg:flex-row">
          <Button>PlayStation 5 <IconArrowNarrowRight /></Button>
          <Button>Xbox Series X|S <IconArrowNarrowRight /></Button>
        </div>
      </TextCard>
    <CommunityLinks />
    </>
  )
}

export default ConsoleNewsPage