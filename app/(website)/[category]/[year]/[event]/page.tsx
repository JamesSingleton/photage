import { notFound } from 'next/navigation'

import { getEventBySlug } from '@lib/sanity.fetch'

export default async function EventPage({ params }: { params: { event: string } }) {
  console.log(params)
  const event = await getEventBySlug(params.event)

  console.log('Event', event)

  if (!event) {
    notFound()
  }

  return (
    <>
      <h1>{event.title}</h1>
    </>
  )
}
