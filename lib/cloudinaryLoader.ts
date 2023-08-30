export default function loader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: string
}) {
  // Extract the version and filename from the Cloudinary URL
  const match = src.match(/\/v(\d+)\/(.+\.\w+)$/)

  if (!match) {
    // Handle invalid URL format
    return src
  }

  const [, version, filename] = match

  // Define your Cloudinary transformation parameters
  const transformations = [`w_${width || 800}`, `q_${quality || 'auto'}`, 'c_scale']

  // Construct the new Cloudinary URL with transformations
  const transformedURL = `https://res.cloudinary.com/${
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }/image/upload/${transformations.join(',')}/v${version}/${filename}`

  return transformedURL
}
