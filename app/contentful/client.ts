import { createClient } from 'contentful'

export const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
})


export const fetchContentfulEntries = async (type: string) => {
  const entries = await client.getEntries({ content_type: type })
  if (entries.items) {
    return {
      items: entries.items
    }
  }
}