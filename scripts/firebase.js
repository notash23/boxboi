import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWGdyzHNHu9eZYlGTktYjxXVeFnYBdG_w",
    authDomain: "boxboi-efc2a.firebaseapp.com",
    projectId: "boxboi-efc2a",
    storageBucket: "boxboi-efc2a.appspot.com",
    messagingSenderId: "690050479175",
    appId: "1:690050479175:web:9d40d97b5a36bcee86ad62"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();

const animation_desktopRef = ref(storage, 'animation_desktop');
const animation_mobileRef = ref(storage, 'animation_mobile');

const modelRef = ref(storage, 'models/scene.gltf');

const surveyRef = doc(db, "Survey", "survey");

let voted = 0

export const downloadModel = (loadModel, onProgress, onLoad) => {
  getDownloadURL(modelRef)
    .then((url) => {
      loadModel(url, onProgress, onLoad);
    })
    .catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          console.log("I cannot find the object. I have the stupid");
          break;
        case 'storage/unauthorized':
          console.log("HEY! You don't have access");
          break;
        case 'storage/canceled':
          console.log("Oops! Download Canceled");
          break;

        case 'storage/unknown':
          console.log("Oops! Unknown Error");
          break;
      }
    });
}

export const currentFrame = async (viewport, index) => {
  if (viewport === true) {
    const frameRef = ref(animation_mobileRef, `${(index+1).toString()}.jpg`)
    return getDownloadURL(frameRef)
  }
  const frameRef = ref(animation_desktopRef, `${(index+1).toString()}.jpg`)
  return getDownloadURL(frameRef)
}

export const vote = { voted: voted }

export const updateHeart = () => {
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
  }

  export const updateBreak = () => {
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
  }
