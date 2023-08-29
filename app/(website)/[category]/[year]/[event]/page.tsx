import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { parseISO, format } from 'date-fns'

import { getEventBySlug } from '@lib/sanity.fetch'
import { Separator } from '@components/ui/separator'

export default async function EventPage({ params }: { params: { event: string } }) {
  const event = await getEventBySlug(params.event)

  if (!event) {
    notFound()
  }

  return (
    <>
      <div className="mt-6 space-y-1">
        <h1 className="flex items-center space-x-2">
          <span className="text-2xl font-semibold tracking-tight">{event.title}</span>
          <time className="text-sm text-muted-foreground" dateTime={event.date}>
            {format(parseISO(event.date), 'MMM d, yyyy')}
          </time>
        </h1>
        <p className="text-sm text-muted-foreground">{event.description}</p>
      </div>
      <Separator className="my-4" />
      <div className="flex space-x-4 pb-4">
        {event.images.map((image, i) => (
          <Image
            key={image._key}
            src={image.url}
            width={250}
            height={330}
            alt={`${event.title} - ${i}`}
            className="aspect-[3/4] h-auto w-[250px] rounded-md object-cover transition-all hover:scale-105"
          />
        ))}
      </div>
    </>
  )
}
