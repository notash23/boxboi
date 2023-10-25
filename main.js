import * as t from 'three'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

//Create scene
const scene = new t.Scene()

//Create Sphere
const geometry = new t.SphereGeometry(3,64, 64)
const material =  new t.MeshStandardMaterial({
  color:"#00ff83",
})
const mesh = new t.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

//Light
const light  = new t.PointLight(0xffffff, 100, 40)
light.position.set(0,10,10)
scene.add(light)

//Camera
const camera = new t.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 20
scene.add(camera)

//Renderer
const canvas = document.querySelector(".webgl")
const renderer = new t.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false

//Resize
window.addEventListener("resize", ()=>{
  //Update Sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  //Update Camera
  camera.aspect = sizes.width/sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})

const loop = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()

const particles = document.querySelector(".canvas");
particles.width = window.innerWidth
particles.height = window.innerHeight

const context = particles.getContext("2d")
const frameCount = 180;
const currentFrame = (index) => `animation/${(index+1).toString()}.jpg`
let anim = { frame: 0 }

const images = [];

for (let index = 0; index < frameCount; index++) {
  const img = new Image();
  img.src = currentFrame(index)
  images.push(img)
}

images[0].onload = render;

function render() {
  context.clearRect(0, 0, particles.width, particles.height);
  context.drawImage(images[anim.frame], 0, 0);
}

// gsap.to(window, { 
//   duration: 15,
//   scrollTo: {
//   y: "#endscroll",
//   // autoKill: true
// }});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".fullscreen",
    pin: true,
    start: "center center",
    end: "center -1200%",
    scrub: 1,
  }
})

tl.set("#Just", {
  opacity: 0,
  scale: 0.6
})

tl.to('#NoGame', {
  duration: 2,
  opacity:0,
  scale: 0.5,
  delay: 2
})

tl.to('#Just', {
  duration: 2,
  opacity: 1,
  scale: 1,
  delay: 2,
})

tl.to('#Just', {
  duration: 4,
  opacity: 0,
  delay: 1.5
})

tl.to(anim, {
  duration: 15,
  frame: frameCount - 1,
  snap: 'frame',
  ease: "expoScale(0.5,7,none)",
  onUpdate: render
})

tl.to('.canvas', {
  duration: 3,
  opacity: 0
})

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".render",
    pin: true,
    start: "top top",
    end: "bottom -200%",
    scrub: 0.5,
  }
})


tl1.set(".webgl", {
  opacity: 0,
})

tl1.to('.webgl', {
  opacity:1,
})

tl1.to(camera.position, {
  duration: 2,
  x: 15,
  y:-10,
  z:10
})

tl1.to('.webgl', {
  opacity: 0,
})

gsap.from("#Out", {
  opacity: 0,
  x: "100vh",
  scrollTrigger: {
    trigger: "#Out",
    start: "center 80%",
    end: "center center",
    scrub: 0.5
  }
})