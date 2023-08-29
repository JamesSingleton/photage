import { Menu } from '@components/menu'
import { Sidebar } from '@components/sidebar'
import { getAllCategories } from '@lib/sanity.fetch'

export default async function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const categories = await getAllCategories()
  return (
    <div className="flex-1">
      <Menu />
      <div className="border-t">
        <div className="flex bg-background">
          <div className="grid flex-1 lg:grid-cols-5">
            <Sidebar className="hidden lg:block" categories={categories} />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
