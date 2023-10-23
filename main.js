import * as t from 'three'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from("#NoGame", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#NoGame",
    pin: true,
    start: "center 48%",
    end: "center top",
    scrub: 1,
  }
})

gsap.from("#Just", {
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: "#Just",
    start: "center bottom",
    end: "center center",
    scrub: 1,
  }
})

gsap.from("#Just", {
  scrollTrigger: {
    trigger: "#Just",
    pin: true,
    start: "center center",
    end: "center top",
    scrub: 1,
  }
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
