import { sizes, addWindowResize } from './scripts/eventListeners';
import { downloadModel } from './scripts/firebase';
import { setSize, loadModel, loop } from "./scripts/three";
import { setCamera, animateLoad, animateDone } from "./scripts/animations";
import { loadImages } from './helpers/image_loader';

const three = setSize(sizes)

loadImages(
        (progress) => { animateLoad(progress) },
        () => { 
            animateLoad(0)
            document.getElementById("load_text").innerHTML = "Loading BoxBoi..."
        }
    )
downloadModel(loadModel, (progress) => { animateLoad(progress) },
() => {
    document.getElementById("body").classList.add("scroll")
    animateDone()
    loop()
})

setCamera(three.camera)
addWindowResize(three.camera, three.renderer);
