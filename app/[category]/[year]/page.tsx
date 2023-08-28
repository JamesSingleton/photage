import { getEventsByYear } from '@lib/sanity.fetch'

export default async function YearPage({ params }: { params: { year: string } }) {
  const { year } = params
  const events = await getEventsByYear(parseInt(year))

  return (
    <>
      <h1>Year Page</h1>
    </>
  )
}
