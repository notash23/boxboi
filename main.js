import { sizes, addWindowResize } from './scripts/eventListeners';
import { downloadModel } from './scripts/firebase';
import { setSize, loadModel, loop } from "./scripts/three";
import { setCamera, animateLoad, animateDone } from "./scripts/animations";
import { loadImagesZip } from './helpers/image_loader';

const three = setSize(sizes)

loadImagesZip(
    (progress) => { animateLoad(progress) },
    () => {
        animateLoad(0)
        document.getElementById("load_text").innerHTML = "Loading BoxBoi..."
        getModel()
    }
)

setCamera(three.camera)
addWindowResize(three.camera, three.renderer);

function getModel() {
    downloadModel(
        loadModel,
        (progress) => { animateLoad(progress) },
        () => {
            document.getElementById("load_text").innerHTML = "Done Loading!"
            animateDone(()=>{ document.getElementById("body").classList.add("scroll") })
            loop()
        }
    )
}
