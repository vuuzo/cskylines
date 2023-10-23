import { client } from "@/lib/contentful/client"
import { TypeFeatureSkeleton } from "@/lib/contentful/types"
import { MediumHeading } from "@/app/components/layout/Headings"

const Feature = async ({ params }: { params: {slug: string} } ) => {
  
  const { slug } = params

  const feature = await client.getEntries<TypeFeatureSkeleton>({
    content_type: 'feature',
    'fields.slug': slug
  })

  const { items } = feature

  return (
    <div className="py-[4.5rem]">
        <MediumHeading className="text-center">{items.at(0)?.fields.title}</MediumHeading>
        <p className="max-w-[45ch] mx-auto mt-4 block text-center">{items.at(0)?.fields.previewDescription}</p>
    </div>
  )
}

export default Feature