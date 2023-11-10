import { sizes, addWindowResize } from './scripts/eventListeners';
import { setModelAnimation, animateLoad, animateDone } from "./scripts/animations";
import { downloadModel } from './scripts/firebase';
import { setSize, loadModel, startRender, stopRender } from "./scripts/three";
import { loadImagesZip } from './helpers/image_loader';

const three = setSize(sizes)
addWindowResize(three.camera, three.renderer)
setModelAnimation(three.camera, startRender, stopRender)

loadImagesZip(
    sizes.isMobile,
    (progress) => { animateLoad(sizes.isMobile, progress) },
    () => {
        animateLoad(sizes.isMobile, 0)
        document.getElementById("load_text").innerHTML = "Loading BoxBoi..."
        getModel()
    }
)

function getModel() {
    downloadModel(
        loadModel,
        (progress) => { animateLoad(sizes.isMobile, progress) },
        () => {
            document.getElementById("load_text").innerHTML = "Done Loading!"
            animateDone(sizes.isMobile, ()=>{ 
                document.getElementById("body").classList.add("scroll");
            })
        }
    )
}
