import type { Image } from 'sanity'

export interface CloudinaryImage {
  created_at: string
  tags: string[]
  _key: string
  uploaded_by: {
    id: string
    type: string
  }
  height: number
  resource_type: string
  access_mode: string
  url: string
  secure_url: string
  public_id: string
  created_by: { id: string; type: string }
  _type: string
  format: string
  bytes: number
  version: number
  width: number
  duration: null
  _version: number
}

export interface EventProps {
  _id: string
  title: string
  slug: string
  description: string
  date: string
  images: CloudinaryImage[]
}

export interface CategoryProps {
  _id: string
  title: string
  slug: string
  description: string
  events: EventProps[] & { categorySlug: string }
}
