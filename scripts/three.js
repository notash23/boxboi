import { Scene, LoadingManager, AnimationMixer, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, Clock } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const scene = new Scene()
const canvas = document.querySelector(".webgl")
let mixer, camera, controls, renderer;
let isRender = false

const loadingManager = new LoadingManager();

export const loadModel = async (url, onProgress, onLoad) => {
  loadingManager.onProgress = (url, loaded, total) => {
    onProgress(loaded/total);
  }
  loadingManager.onError = (url) => {
      console.error(`Could not load model from: ${url}`);
  }
  const loader = new GLTFLoader(loadingManager);
  loader.loadAsync(url).then(gltf => {
    scene.add(gltf.scene);
    const renderPromise = new Promise(resolve => {
      controls.update()
      renderer.render(scene, camera)
      resolve()
    })
    mixer = new AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip)=> {
      const action = mixer.clipAction(clip);
      action.play();
    })
    renderPromise.then(onLoad)
  })
  .catch((error)=> {
    console.error('Error loading JSON scene:', error)
  })
}

export const setSize = (sizes) => {
  camera = new PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
  renderer = new WebGLRenderer({ canvas })
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(2)  
  setControls(sizes.isMobile)
  return { camera: camera, renderer: renderer }
}

export const startRender = () => {
  isRender = true
  loop()
}

export const stopRender = () => {
  isRender = false
}

function setControls(isMobile) {
  controls = new OrbitControls(camera, canvas)
  controls.target.set(-1, 1.2, -0.2)
  controls.maxPolarAngle = 2
  controls.enableDamping = true
  controls.enablePan = false
  controls.enableZoom = false
  if (isMobile) {
    controls.enabled = false
    canvas.style.touchAction = 'pan-y'
  }
}

const clock = new Clock()
function loop() {
  if (mixer)
    mixer.update(clock.getDelta())
  controls.update()
  renderer.render(scene, camera)
  if (!isRender)
    return
  window.requestAnimationFrame(loop)
}
