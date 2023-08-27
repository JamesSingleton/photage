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

export default function GenrePage() {
  return (
    <>
      <h1>Genre Page</h1>
    </>
  )
}