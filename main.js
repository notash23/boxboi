import * as t from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWGdyzHNHu9eZYlGTktYjxXVeFnYBdG_w",
  authDomain: "boxboi-efc2a.firebaseapp.com",
  projectId: "boxboi-efc2a",
  storageBucket: "boxboi-efc2a.appspot.com",
  messagingSenderId: "690050479175",
  appId: "1:690050479175:web:9d40d97b5a36bcee86ad62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const surveyRef = doc(db, "Survey", "survey");

let voted = 0

const modelPath = "models/scene.gltf"

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

//Create scene
const scene = new t.Scene()

// Mixer
let mixer;

//Add Camera
const camera = new t.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)

// Create Renderer
const canvas = document.querySelector(".webgl")
const renderer = new t.WebGLRenderer({ canvas })
renderer.toneMapping = t.ACESFilmicToneMapping;
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)

//Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(-1, 1.2, -0.2)
controls.maxPolarAngle = 2
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false

//Load Model
const loader = new GLTFLoader();
loader.load(modelPath, (gltf) => {
  scene.add(gltf.scene);
  
  //Load animation
  mixer = new t.AnimationMixer(gltf.scene);
  gltf.animations.forEach((clip)=> {
    const action = mixer.clipAction(clip);
    action.play();
  });
  console.log("Loaded Model succesfully");
}, undefined, (error) => {
  console.error('Error loading JSON scene:', error);
});

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

const clock = new t.Clock()
const loop = () => {
  if (mixer)
    mixer.update(clock.getDelta())
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


let viewport;
if (window.matchMedia("(max-width: 600px)").matches) {
  viewport = 'animation_mobile'
} else {
  viewport = 'animation_desktop'
}
const currentFrame = (index) => `${viewport}/${(index+1).toString()}.jpg`
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
  context.drawImage(images[anim.frame], 0, 0, particles.width, particles.height);
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
    scrub: 0.5,
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
  delay: 1
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
    end: "bottom -1000%",
    scrub: 0.3,
  }
})


tl1.set(".webgl", {
  opacity: 0,
})

tl1.set(camera.position, {
  x: 4.5,
  y: 3.75,
  z: 3.16
});

tl1.to('.webgl', {
  opacity:1,
})

tl1.to(camera.position, {
  duration: 2,
  x: 0.532,
  y: 0.772,
  z: -6.52
})

tl1.to(camera.position, {
  duration: 2,
  x: -6.83,
  y: 1.98,
  z: -2.93
})

tl1.to(camera.position, {
  duration: 2,
  x: -5.47,
  y: 2.64,
  z: 4.27
})

tl1.to('.webgl', {
  opacity: 0,
})

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#Out",
    start: "center bottom",
    end: "center center",
    scrub: 0.5
  }
})

tl2.from("#Out", {
  opacity: 0,
  x: "100vh",
})

tl2.from("#heart", {
  opacity: 0,
  y: "20vh",
  delay: 1
})

tl2.from("#broken", {
  opacity: 0,
  y: "20vh",
})

const heartButton = document.getElementById("heart");
const brokenButton = document.getElementById("broken");

const heartIcon = document.getElementById("heart-icon");
const brokenIcon = document.getElementById("broken-icon");

heartButton.addEventListener("mouseover", () => {
  heartIcon.classList.add('fa-beat')
})

heartButton.addEventListener("mouseout", () => {
  heartIcon.classList.remove('fa-beat')
})

heartButton.addEventListener("mouseup", () => {
  let survey;
  if (voted<1) {
    if (voted === -1) {
      survey = {
        yes: increment(1),
        no: increment(-1)
      }
    } else {
      survey = {
        yes: increment(1)
      }
    }
    voted = 1
    updateDoc(surveyRef, survey);
  }
})

brokenButton.addEventListener("mouseover", () => {
  brokenIcon.classList.add('fa-shake')
})

brokenButton.addEventListener("mouseout", () => {
  brokenIcon.classList.remove('fa-shake')
})

brokenButton.addEventListener("mouseup", () => {
  if (voted>-1) {
    let survey;
    if (voted === 1) {
      survey = {
        yes: increment(-1),
        no: increment(1)
      }
    } else {
      survey = {
        no: increment(1)
      }
    }
    voted = -1
    updateDoc(surveyRef, survey);
  }
})
