import Image from 'next/image'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

import { cn } from '@lib/utils'

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  event: any
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

export function Artwork({
  event,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  const firstImage = event.images[0]
  const eventYear = new Date(event.date).getFullYear()

  return (
    <div {...props}>
      <Link
        href={`/${event.categorySlug}/${eventYear}/${event.slug}`}
        className={cn('block space-y-3', className)}
      >
        <div className="overflow-hidden rounded-md">
          <Image
            src={firstImage.url}
            alt={event.title}
            width={width}
            height={height}
            className={cn(
              'h-auto w-auto object-cover transition-all hover:scale-105',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
            )}
          />
        </div>
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{event.title}</h3>
          <p className="text-xs text-muted-foreground">
            {format(parseISO(event.date), 'MMM d, yyyy')}
          </p>
        </div>
      </Link>
    </div>
  )
}
