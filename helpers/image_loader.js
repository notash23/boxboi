import { getImageZip, reportError } from '../scripts/firebase'
import { loadAsync } from 'jszip'

let isMobile = false;
if (window.matchMedia("(max-width: 600px)").matches) {
  isMobile = true
}
const urlCreator = window.URL || window.webkitURL;

const particles = document.querySelector(".canvas");
particles.width = window.innerWidth
particles.height = window.innerHeight

const context = particles.getContext("2d")

export const frameCount = 180;
export const images = [];
export const anim = { frame: 0 }

export const render = () =>  {
  context.clearRect(0, 0, particles.width, particles.height);
  if (images[anim.frame])
    context.drawImage(images[anim.frame], 0, 0, particles.width, particles.height);
}

export const loadImagesZip = (onProgress, onComplete) => {
  getImageZip(isMobile, onProgress, async (blob)=> {
    const zip = await loadAsync(blob)
    const img = new Image();
    zip.file('1.jpg').async('blob').then((blob) => {
      img.src = urlCreator.createObjectURL(blob);
      images[0] = img
      images[0].onload = render;
    })
    images[0] = img
    images[0].onload = render;
    for (let index = 1; index < frameCount; index++) {
      const img = new Image();
      zip.file(`${index+1}.jpg`).async('blob').then((blob) => {
        img.src = urlCreator.createObjectURL(blob);
        images[index] = img
      })
    }
    onComplete()
  })
  .catch((error) => {
    reportError(error)
  });
}
