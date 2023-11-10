import { updateBreak, updateHeart, vote } from './firebase';

const heartButton = document.getElementById("heart");
const brokenButton = document.getElementById("broken");

const heartIcon = document.getElementById("heart-icon");
const brokenIcon = document.getElementById("broken-icon");

export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.matchMedia("(max-width: 768px)").matches
  }

heartButton.addEventListener("mouseover", () => {
  heartIcon.classList.add('fa-beat')
})

heartButton.addEventListener("mouseout", () => {
  if (vote.voted < 1) {
    heartIcon.classList.remove('fa-beat')
  }
})

heartButton.addEventListener("mouseup", () => { 
  updateHeart()
})

brokenButton.addEventListener("mouseover", () => {
  brokenIcon.classList.add('fa-shake')
})

brokenButton.addEventListener("mouseout", () => {
  if (vote.voted > -1) {
    brokenIcon.classList.remove('fa-shake')
  }
})

brokenButton.addEventListener("mouseup", ()=> {
  updateBreak()
})

export const addWindowResize = (camera, renderer) => {
    window.addEventListener("resize", ()=>{
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        sizes.isMobile = window.matchMedia("(max-width: 768px)").matches
        
        camera.aspect = sizes.width/sizes.height
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
    })
}