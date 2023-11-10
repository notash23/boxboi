import { getImageZip, reportError } from '../scripts/firebase'
import { loadAsync } from 'jszip'

const urlCreator = window.URL || window.webkitURL;

const particles = document.querySelector(".canvas");
particles.width = window.innerWidth
particles.height = window.innerHeight

const context = particles.getContext("2d")

export const render = () =>  {
  context.clearRect(0, 0, particles.width, particles.height)
  if (images[anim.frame])
    context.drawImage(images[anim.frame], 0, 0, particles.width, particles.height)
}

export const anim = { frame: 0 }
export const frameCount = 180

const images = []
const imagePromises = []

imagePromises[0] = new Promise((resolve)=> {
  images[0] = new Image()
  images[0].decoding = "async"
  images[0].onload = render
  resolve()
})

for (let index = 1; index < frameCount; index++) {
  imagePromises[index] = new Promise((resolve)=> {
    images[index] = new Image()
    images[index].decoding = "async"
    resolve()
  })
}

export const loadImagesZip = (isMobile, onProgress, onComplete) => {
  getImageZip(isMobile, onProgress, async (blob)=> {
    const zip = await loadAsync(blob)
    await Promise.all(imagePromises)
    const blobPromises = []
    for (let index = 0; index < frameCount; index++) {
      blobPromises[index] = new Promise((resolve) => {
        zip.file(`${index+1}.webp`).async('blob').then((blob)=> {
          resolve(blob)
        })
      })
    }
    const blobs = await Promise.all(blobPromises)
    const srcPromises = []
    for (let index = 0; index < blobs.length; index++) {
      srcPromises.push(new Promise((resolve)=> {
        images[index].src = urlCreator.createObjectURL(blobs[index])
        resolve()
      }))
    }
    await Promise.all(srcPromises)
    onComplete()
  })
  .catch((error) => {
    reportError(error)
  });
}
