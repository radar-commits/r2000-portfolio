import { defineQuery } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/react'

export interface SanityImageWithAlt {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; height: number; width: number }
  alt?: string
  lqip?: string | null
}

export interface CaseStudyListItem {
  _id: string
  title: string | null
  slug: { current: string } | null
  datePosted: string | null
  headerImage: SanityImageWithAlt | null
}

export interface CaseStudy extends CaseStudyListItem {
  content: PortableTextBlock[] | null
}

export const ALL_CASE_STUDIES_QUERY = defineQuery(`
  *[_type == "caseStudy"] | order(datePosted desc) {
    _id,
    title,
    slug,
    datePosted,
    headerImage{ ..., "lqip": asset->metadata.lqip }
  }
`)

export const CASE_STUDY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    datePosted,
    headerImage{ ..., "lqip": asset->metadata.lqip },
    content
  }
`)

export const ALL_CASE_STUDY_SLUGS_QUERY = defineQuery(`
  *[_type == "caseStudy"] { "slug": slug.current }
`)

export interface FooterLinkItem {
  _key: string
  label: string
  href: string
  openInNewTab?: boolean
}

export interface FooterSocialLink {
  _key: string
  platform: string
  href: string
  openInNewTab?: boolean
}

export interface FooterData {
  menuItems: FooterLinkItem[] | null
  socialLinks: FooterSocialLink[] | null
}

export const FOOTER_QUERY = defineQuery(`
  *[_type == "footer" && _id == "site-footer"][0] {
    menuItems[]{ _key, label, href, openInNewTab },
    socialLinks[]{ _key, platform, href, openInNewTab }
  }
`)
