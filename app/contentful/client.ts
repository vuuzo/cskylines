import { createClient } from 'contentful'
import { TypeFeatureSkeleton, TypeStreamerCardSkeleton } from './types'

export const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
})

export const fetchAsset = async (id: string) => {
  const asset = await client.getAsset(id)
  return asset.fields.file?.url
}

export const fetchStreamers = async () => {
  const entries = await client.getEntries<TypeStreamerCardSkeleton>({ content_type: 'streamerCard' })
  if (entries.items) {
    return {
      items: entries.items
    }
  }
}

export const fetchFeatures = async () => {
  const entries = await client.getEntries<TypeFeatureSkeleton>({ content_type: 'feature' })
  if (entries.items) {
    return {
      items: entries.items
    }
  }
}