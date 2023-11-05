import { client } from "@/lib/contentful/client"
import { TypeFeatureSkeleton } from "@/lib/contentful/types"
import { MediumHeading, SmallHeading } from "@/app/components/layout/Headings"
import Container from "@/app/components/layout/Container"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, Document as RichTextDocument } from '@contentful/rich-text-types';
import { formatDate } from "@/utils/utils"
import CommunityLinks from "@/app/components/sections/CommunityLinks"
import FeatureHighlights from "@/app/components/sections/FeatureHighlights"
import Image from "next/image"

type RichTextProps = {
  document: RichTextDocument | null
}

const Feature = async ({ params }: { params: {slug: string} } ) => {
  const { slug } = params
  const feature = await client.getEntries<TypeFeatureSkeleton>({
    content_type: 'feature',
    'fields.slug': slug
  })

  // @ts-ignore
  const { title, date, releaseId, fullArticle: content, previewDescription } = feature.items.at(0)?.fields

  const options = {
    renderNode: {
      // @ts-ignore
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (<Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.file.title}
          className="block w-full"
        />)
      },
      // @ts-ignore
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <MediumHeading className="mb-0">{children}</MediumHeading>
        )
      },
      // @ts-ignore
      [BLOCKS.PARAGRAPH]: (node, children) => (<p className="my-6 first:mt-0">{children}</p>)
    }
  }

  
  const RichText =({ document }: RichTextProps) => {
    if (!document) {
      return null
    }
  
    return <>{documentToReactComponents(document, options)}</>
  }

  return (
    <>
    <div className="py-[4.5rem]">
      <Container>
        <div className="col-[1/span_4]">
          <SmallHeading>{formatDate(date)}</SmallHeading>
          <MediumHeading className="text-xl lg:text-2xl">
            Cities: Skylines II Feature #{releaseId}: {title}
          </MediumHeading>
        </div>
        <div className="col-[1/span_4] sm:col-[6/span_5] md:col-[6/span_7] whitespace-pre-line">
          <RichText document={content} />
        </div>
      </Container>
    </div>

    <FeatureHighlights />
    <CommunityLinks />
    </>
  )
}

export default Feature
