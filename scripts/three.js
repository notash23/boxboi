import * as t from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new t.Scene()
const canvas = document.querySelector(".webgl")
let mixer, camera, controls, renderer;

const loadingManager = new t.LoadingManager();

export const setSize = (sizes) => {
  camera = new t.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
  renderer = new t.WebGLRenderer({ canvas })
  renderer.toneMapping = t.ACESFilmicToneMapping;
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(2)

  //Controls
  controls = new OrbitControls(camera, canvas)
  controls.target.set(-1, 1.2, -0.2)
  controls.maxPolarAngle = 2
  controls.enableDamping = true
  controls.enablePan = false
  controls.enableZoom = false

  return { camera: camera, renderer: renderer }
}

export const loadModel = (url, onProgress) => {
  loadingManager.onProgress = function(url, loaded, total) {
    onProgress(loaded/total);
  }
  loadingManager.onError = (url) => {
      console.error(`Could not load model from: ${url}`);
  }
  const loader = new GLTFLoader(loadingManager);
  loader.load(url, (gltf) => {
    scene.add(gltf.scene);
    
    mixer = new t.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip)=> {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }, undefined, (error) => {
    console.error('Error loading JSON scene:', error);
  });
} 

const clock = new t.Clock()
export const loop = () => {
  if (mixer)
    mixer.update(clock.getDelta())
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
