import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFeatureFields {
    slug: EntryFieldTypes.Symbol;
    releaseId: EntryFieldTypes.Integer;
    date?: EntryFieldTypes.Date;
    title: EntryFieldTypes.Symbol;
    previewDescription?: EntryFieldTypes.Symbol;
    unveiled?: EntryFieldTypes.Boolean;
    image?: EntryFieldTypes.AssetLink;
    fullArticle?: EntryFieldTypes.RichText;
}

export type TypeFeatureSkeleton = EntrySkeletonType<TypeFeatureFields, "feature">;
export type TypeFeature<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFeatureSkeleton, Modifiers, Locales>;

export interface TypePlatformsFields {
    platforms: EntryFieldTypes.Object;
}

export type TypePlatformsSkeleton = EntrySkeletonType<TypePlatformsFields, "platforms">;
export type TypePlatforms<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePlatformsSkeleton, Modifiers, Locales>;

export interface TypeProjectFields {
    name: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    link?: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"E-commerce" | "Landing Page" | "Website">;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;




// Streamer Card

export interface TypeStreamerCardFields {
    image: EntryFieldTypes.AssetLink
    platform: EntryFieldTypes.Symbol<"Kick" | "Twitch" | "YouTube">
    link: EntryFieldTypes.Symbol
    nickname: EntryFieldTypes.Symbol
}

export type TypeStreamerCardSkeleton = EntrySkeletonType<TypeStreamerCardFields, "streamerCard">
export type TypeStreamerCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeStreamerCardSkeleton, Modifiers, Locales>