import { notFound } from 'next/navigation'

import { getCategoryBySlug } from '@lib/sanity.fetch'
import { Artwork } from '@components/Artwork'
import { Separator } from '@components/ui/separator'

import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}): Promise<Metadata> {
  const { category } = params
  return {
    title: category,
    description: 'Generated by create next app',
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params
  const data = await getCategoryBySlug(category)

  if (!data) {
    notFound()
  }

  return (
    <>
      <div className="mt-6 space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{data.title}</h1>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </div>
      <Separator className="my-4" />
      <div className="flex space-x-4 pb-4">
        {data.events.map((event) => {
          return (
            <Artwork
              key={event._id}
              aspectRatio="portrait"
              event={event}
              width={250}
              height={330}
              className="w-[250px]"
            />
          )
        })}
      </div>
    </>
  )
}
