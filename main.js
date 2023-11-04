import { sizes, addWindowResize } from './scripts/eventListeners';
import { downloadModel } from './scripts/firebase';
import { setSize, loadModel, loop } from "./scripts/three";
import { setCamera } from "./scripts/animations";
import { loadImages } from './helpers/image_loader';

const three = setSize(sizes)

loadImages((progress) => { console.log(progress) })
downloadModel(loadModel, (progress) => { console.log(progress) })
setCamera(three.camera)
addWindowResize(three.camera, three.renderer);
loop()
