export default function loader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: string
}) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]

  src = src.replace(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`,
    '',
  )

  return `https://res.cloudinary.com/${
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }/image/upload/${params.join(',')}/${src}`
}
