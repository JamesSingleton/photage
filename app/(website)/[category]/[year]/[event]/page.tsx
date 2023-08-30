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
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {event.images.map((image, i) => (
          <Link
            href={`?photoId=${i}`}
            key={image._key}
            as={`/photos/${event.slug}/${i}`}
            shallow
            className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
          >
            <Image
              alt={image.context ? image.context.custom.alt : `${event.title} - ${i}`}
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              src={image.secure_url}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
           (max-width: 1280px) 50vw,
           (max-width: 1536px) 33vw,
           25vw"
            />
          </Link>
        ))}
      </div>
    </>
  )
}
