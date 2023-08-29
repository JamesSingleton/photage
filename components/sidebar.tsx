'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button, buttonVariants } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { cn } from '@lib/utils'
import { type CategoryProps } from '@types'

export function Sidebar({
  className,
  categories,
}: {
  className?: string
  categories: CategoryProps[]
}) {
  const pathname = usePathname()

  return (
    <div className={cn('h-full pb-12', className)}>
      <div className="flex h-full flex-col justify-between space-y-4 py-4">
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">Categories</h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {categories?.map((category) => {
                const linkVariant = pathname.includes(`/${category.slug}`) ? 'secondary' : 'ghost'
                return (
                  <Link
                    key={category._id}
                    href={`/${category.slug}`}
                    className={cn(
                      buttonVariants({ variant: linkVariant }),
                      'w-full justify-start font-normal',
                    )}
                  >
                    {category.title}
                  </Link>
                )
              })}
            </div>
          </ScrollArea>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              About Me
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
