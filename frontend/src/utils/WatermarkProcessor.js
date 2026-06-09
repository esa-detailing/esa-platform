export async function applyWatermark(imageSrc) {
  const img = new Image()
  img.src = imageSrc

  await img.decode()

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = img.width
  canvas.height = img.height

  ctx.drawImage(img, 0, 0)

  ctx.font = '48px Arial'
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.fillText('ESA DETAILING', 40, img.height - 60)

  return canvas.toDataURL('image/jpeg')
}
