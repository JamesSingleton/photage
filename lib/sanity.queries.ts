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

// get events in a certain year
export const eventsByYear = groq`
  *[_type == "event" && date == $year] {
    title,
    slug,
    description,
    date,
    images,
  }
`
