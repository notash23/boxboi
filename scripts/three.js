import { Scene, LoadingManager, AnimationMixer, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, Clock } from 'three'

const scene = new Scene()
const canvas = document.querySelector(".webgl")
let mixer, camera, controls, renderer;

const loadingManager = new LoadingManager();

export const loadModel = async (url, onProgress, onLoad) => {
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
  loadingManager.onProgress = (url, loaded, total) => {
    onProgress(loaded/total);
  }
  loadingManager.onLoad = onLoad
  loadingManager.onError = (url) => {
      console.error(`Could not load model from: ${url}`);
  }
  const loader = new GLTFLoader(loadingManager);
  loader.load(url, (gltf) => {
    scene.add(gltf.scene);
    
    mixer = new AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip)=> {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }, undefined, (error) => {
    console.error('Error loading JSON scene:', error);
  });
}

export const setSize = (sizes) => {
  camera = new PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
  renderer = new WebGLRenderer({ canvas })
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(2)
  setControls()
  return { camera: camera, renderer: renderer }
}

async function setControls() {
  
  const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls')
  controls = new OrbitControls(camera, canvas)
  controls.target.set(-1, 1.2, -0.2)
  controls.maxPolarAngle = 2
  controls.enableDamping = true
  controls.enablePan = false
  controls.enableZoom = false
}

const clock = new Clock()
export const loop = () => {
  if (mixer)
    mixer.update(clock.getDelta())
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
