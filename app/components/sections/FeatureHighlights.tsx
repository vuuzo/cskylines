import { IconArrowNarrowRight } from "@tabler/icons-react"
import Button from "../elements/Button"
import { client } from "@/app/contentful/client"
import { Card, CardContent, CardImage, SecondaryText, Text, Title } from "../layout/CardElements"
import { formatDate } from "../../utils/formatDate"
import { MediumHeading } from "../layout/Headings"

const FeatureHighlights = async () => {
    
    const features = await client.getEntries({
        content_type: 'feature',
        limit: 3,
        order: `-fields.releaseId`
    })
    const { items } = features 

    return (
        <div className='my-[72px] px-4 sm:px-8 lg:px-skylines'>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8'>
            <MediumHeading className="text-center col-[1/-1]">Feature Highlights</MediumHeading>
                {items.map(item => (
                    <Card link={item.fields.unveiled ? `features/${item.fields.slug}` : ''}>
                        <CardImage src={`https:${item.fields.image.fields.file.url}`}/>
                        <CardContent arrow={item.fields.unveiled}>
                            <SecondaryText>{formatDate(item.fields.date)}</SecondaryText>
                            <Title>Feature #{item.fields.releaseId}: {item.fields.title}</Title>
                            <Text>{item.fields.previewDescription}</Text>
                        </CardContent>
                    </Card>
                ))}
                <div className='mx-auto md:col-span-3'>
                    <Button link='/features'>
                        <span>Explore All Features</span>
                        <IconArrowNarrowRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FeatureHighlights