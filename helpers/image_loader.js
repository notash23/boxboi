import { currentFrame } from '../scripts/firebase'

let isMobile = false;
if (window.matchMedia("(max-width: 600px)").matches) {
  isMobile = true
}

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

export const loadImages = (onProgress, onComplete) => {
    let progress = 0;
    currentFrame(isMobile, 0).then((url) => {
        const img = new Image();
        img.src = url
        images[0] = img
        progress += 1
        onProgress(progress/frameCount)
        if (progress == frameCount) {
          console.log("DONE");
          onComplete()
        }
        images[0].onload = render;
    })
    .catch((error) => {
        reportError(error)
    });
    for (let index = 1; index < frameCount; index++) {
        const img = new Image();
        currentFrame(isMobile, index).then((url) => {
            img.src = url
            images[index] = img
            progress += 1
            onProgress(progress/frameCount)
            if (progress === frameCount) {
              onComplete()
            }
          })
          .catch((error) => {
            reportError(error)
          });
    }
}

function reportError(error) {
    switch (error.code) {
        case 'storage/object-not-found':
          console.log("I cannot find the object. I have the stupid");
          break;
        case 'storage/unauthorized':
          console.log("HEY! You don't have access");
          break;
        case 'storage/canceled':
          console.log("Oops! Download Canceled");
          break;
        case 'storage/unknown':
          console.log("Oops! Unknown Error");
          break;
      }   
}