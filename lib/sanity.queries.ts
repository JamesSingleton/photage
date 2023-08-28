import { groq } from 'next-sanity'

export const eventBySlug = groq`
  *[_type == "event" && slug.current == $slug][0] {
    title,
    slug,
    description,
    date,
    images,
  }
`

export const eventsByYear = groq`
  *[_type == "event" && dateTime(date) == dateTime($year)] {
    title,
    slug,
    description,
    date,
    images,
  }
`
