import { groq } from 'next-sanity'

export const eventBySlug = groq`
  *[_type == "event" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    description,
    date,
    images,
  }
`

export const eventsByYear = groq`
  *[_type == "event" && dateTime(date) == dateTime($year)] {
    title,
    "slug": slug.current,
    description,
    date,
    images,
  }
`

export const categoryBySlug = groq`
  *[_type == "category" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    description,
    "events": *[_type == "event" && category._ref == ^._id] {
      _id,
      title,
      "slug": slug.current,
      description,
      date,
      images,
      "categorySlug": category->slug.current,
    }
  }
`
