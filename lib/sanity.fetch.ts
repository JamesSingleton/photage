import { draftMode } from 'next/headers'

import { client } from '@lib/sanity.client'
import { revalidateSecret } from '@lib/sanity.api'
import { eventBySlug, eventsByYear } from './sanity.queries'

import type { QueryParams } from '@sanity/client'

export const token = process.env.SANITY_API_READ_TOKEN

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled

  if (isDraftMode && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required to fetch data from Sanity in draft mode.',
    )
  }

  // @TODO this won't be necessary after https://github.com/sanity-io/client/pull/299 lands
  const sanityClient =
    client.config().useCdn && isDraftMode ? client.withConfig({ useCdn: false }) : client
  return sanityClient.fetch<QueryResponse>(query, params, {
    // We only cache if there's a revalidation webhook setup
    cache: revalidateSecret ? 'force-cache' : 'no-store',
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  })
}

export function getEventBySlug(slug: string) {
  return sanityFetch({
    query: eventBySlug,
    params: { slug },
    tags: [`event:${slug}`],
  })
}

export function getEventsByYear(year: number) {
  return sanityFetch({
    query: eventsByYear,
    params: { year },
    tags: [`events:${year}`],
  })
}
