import { createClient } from 'contentful'
import { TypeStreamerCardSkeleton } from './types'

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

export const fetchSreamers = async () => {
  const entries = await client.getEntries<TypeStreamerCardSkeleton>({ content_type: 'streamerCard' })
  if (entries.items) {
    return {
      items: entries.items
    }
  }
}