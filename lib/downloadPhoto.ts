function forceDownload(blubUrl: string, filename: string) {
  let a: any = document.createElement('a')
  a.download = filename
  a.href = blubUrl
  a.click()
  a.remove()
}

export default function downloadPhoto(url: string, filename: string) {
  //@ts-ignore
  if (!filename) filename = url.split('\\').pop().split('/').pop()
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: 'cors',
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob)
      forceDownload(blobUrl, filename)
    })
    .catch((e) => console.error(e))
}
