import { animateLoad, animateDone, setCamera } from "./scripts/animations";
import { downloadModel } from './scripts/firebase';
import { loadImagesZip } from './helpers/image_loader';

loadImagesZip(
    (progress) => { animateLoad(progress) },
    () => {
        animateLoad(0)
        document.getElementById("load_text").innerHTML = "Loading BoxBoi..."
        getModel()
    }
)

import3Dtools()

async function import3Dtools() {
    const { setSize } = await import("./scripts/three")
    const { sizes, addWindowResize } = await import('./scripts/eventListeners')

    const three = setSize(sizes)
    setCamera(three.camera)
    addWindowResize(three.camera, three.renderer)
}

async function getModel() {
    const { loadModel, loop } = await import("./scripts/three");
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
