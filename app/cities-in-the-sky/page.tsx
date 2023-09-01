import Box, { BoxContent, BoxImage } from "../components/layout/Box"
import { Card, CardContent, CardImage, SecondaryText, Title } from "../components/layout/CardElements"
import { BigHeading, MediumHeading, SmallHeading } from "../components/layout/Headings"
import HeroWrapper from "../components/layout/HeroWrapper"
import { client, fetchAsset, fetchContentfulEntries, fetchStreamers } from "../contentful/client"
import CommunityLinks from "../components/sections/CommunityLinks"
import Newsletter from "../components/sections/Newsletter"
import Preorder from "../components/sections/Preorder"

const Page = async () => {
  const results = await fetchStreamers()
  
  results?.items.map(async item => {
    const assetId = item.fields.image.sys.id
    const URL = await fetchAsset(assetId)

    return (
      <Card link={item.fields.link}>
        <CardImage src={`https:${URL}`}/>
        <CardContent className="bg-[#14171f]">
            <SecondaryText>Watch on {item.fields.platform}</SecondaryText>
            <Title>{item.fields?.nickname}</Title>
        </CardContent>
      </Card>
    )
  })

  return (
    <>
      <HeroWrapper className="flex items-center">
        <SmallHeading>Cities: Skylines II</SmallHeading>
        <BigHeading>Cities In The Sky</BigHeading>
      </HeroWrapper>
      <div className='my-[72px] px-4 sm:px-8 lg:px-skylines'>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8'>
          <MediumHeading className="col-[1/-1] text-center text-[1.25rem] lg:text-[1.5rem]">Watch Your Favourite Streamers Live From Cities In The Sky</MediumHeading>
          {
              results?.items.map(async item => {
                const assetId = item.fields.image.sys.id
                const URL = await fetchAsset(assetId)
            
                return (
                  <Card link={item.fields.link}>
                    <CardImage src={`https:${URL}`}/>
                    <CardContent className="bg-[#14171f]">
                        <SecondaryText>Watch on {item.fields.platform}</SecondaryText>
                        <Title>{item.fields?.nickname}</Title>
                    </CardContent>
                  </Card>
                )
              })
          }
        </div>

        <Box>
          <BoxImage src="/stream.jpg"/>
          <BoxContent>
            <SmallHeading>August 23 18:00 CEST | 9AM PST</SmallHeading>
            <MediumHeading>Gameplay Stream Premiere</MediumHeading>
            <p className="mt-6">Something exciting is happening soon!</p>
            <p className="mt-6">Live from Gamescom, we've invited dozens of creators across YouTube, Twitch, and TikTok to come and play Cities: Skylines II for the first time publicly.</p>
            <p className="mt-6">With just a little twist..they'll be hanging 50 meters in the sky over the Gamescom Event Center! Where better to experience Cities than in the skyline of Cologne, Germany?</p>
          </BoxContent>
        </Box>
      </div>
      <Preorder />
      <Newsletter />
      <CommunityLinks />
    </>
  )
}

export default Page