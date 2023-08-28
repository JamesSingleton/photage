import type { Image } from 'sanity'

export interface EventProps {
  _id: string
  title: string
  slug: string
  description: string
  date: string
  images: Image[]
}

export interface CategoryProps {
  title: string
  slug: string
  description: string
  events: EventProps[] & { categorySlug: string }
}
