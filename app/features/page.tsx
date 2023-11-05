import { formatDate } from "../../utils/utils"
import { Card, CardContent, CardImage, SecondaryText, Text, Title } from "../components/layout/CardElements"
import { client, fetchAsset, fetchFeatures } from "../../lib/contentful/client"
import HeroWrapper from "../components/layout/HeroWrapper"
import { BigHeading, MediumHeading, SmallHeading } from "../components/layout/Headings"
import Newsletter from "../components/sections/Newsletter"
import CommunityLinks from "../components/sections/CommunityLinks"
import Box, { BoxContent, BoxImage } from "../components/layout/Box"
import Preorder from "../components/sections/Preorder"
import { TypeFeatureSkeleton } from "../../lib/contentful/types"

const Features = async () => {
    const results = await client.getEntries<TypeFeatureSkeleton>({
        content_type: 'feature',
        order: ["fields.releaseId"]
    })
    return (
        <>

            <div className='my-[72px] px-4 sm:px-8 lg:px-skylines'>
                <Box>
                    <BoxImage src='/features.jpg'/>
                    <BoxContent>
                        <SmallHeading>Cities: Skylines II</SmallHeading>
                        <MediumHeading>Feature Highlights</MediumHeading>
                        <p className="mb-6">What is new in Cities: Skylines II you ask?</p>
                        <p>With a new episode each week we take you through everything the game has to offer, ranging from familiar features which have been expanded, to elements brand new to the franchise.</p>
                    </BoxContent>
                </Box>
                <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8'>
                    {
                        results?.items.map(async item => {
                            const assetId = item.fields.image?.sys.id as string
                            const URL = await fetchAsset(assetId)
                        
                            return (
                            <Card link={item.fields.unveiled ? `features/${item.fields.slug}` : ''}>
                                <CardImage src={`https:${URL}`}/>
                                <CardContent arrow={item.fields.unveiled} className="bg-white text-[#101010]">
                                    <SecondaryText>{formatDate(item.fields.date as string)}</SecondaryText>
                                    <Title>Feature #{item.fields.releaseId}: {item.fields.title}</Title>
                                    <Text>{item.fields.previewDescription}</Text>
                                </CardContent>
                            </Card>
                            )
                        })
                    }
                </div>
            </div>
            <Preorder />
            <Newsletter/>
            <CommunityLinks />
        </>
    )
}

export default Features