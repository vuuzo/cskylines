import type { Entry, EntryFields } from 'contentful'

export type FeaturesType =
{
  contentTypeId: "feature",
  fields: {
    slug: EntryFields.Text,
    releaseId: EntryFields.Number,
    date: EntryFields.Date,
    title: EntryFields.Text,
    previewDescription: EntryFields.Text,
    unveiled: EntryFields.Boolean,
    image: {
      fields: {
        title: EntryFields.Text,
        file: {
          url: EntryFields.AssetLink
        }
      }
    }
    fullArticle: EntryFields.AssetLink,
  }
}