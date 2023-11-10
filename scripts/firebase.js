import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore"

let voted = 0
export const vote = { voted: voted }

const firebaseConfig = {
    apiKey: "AIzaSyAWGdyzHNHu9eZYlGTktYjxXVeFnYBdG_w",
    authDomain: "boxboi-efc2a.firebaseapp.com",
    projectId: "boxboi-efc2a",
    storageBucket: "boxboi-efc2a.appspot.com",
    messagingSenderId: "690050479175",
    appId: "1:690050479175:web:9d40d97b5a36bcee86ad62"
};

const app = initializeApp(firebaseConfig)

const storage = getStorage()
const db = getFirestore(app)
const surveyRef = doc(db, "Survey", "survey")

const animation_desktopRef = ref(storage, 'animation_desktop.zip')
const animation_mobileRef = ref(storage, 'animation_mobile.zip')

const xhr = new XMLHttpRequest()

const modelRef = ref(storage, 'models/scene.glb')

export const downloadModel = (loadModel, onProgress, onLoad) => {
  getDownloadURL(modelRef)
    .then((url) => {
      loadModel(url, onProgress, onLoad);
    })
    .catch((error) => {
      reportError(error)
    });
}

export const getImageZip = async (viewport, onProgress, onComplete) => {
  const url =  viewport? 
  await getDownloadURL(animation_mobileRef):
  await getDownloadURL(animation_desktopRef)

  xhr.responseType = 'blob';
  xhr.open('GET', url, true);

  xhr.onprogress = (progress) => {
    onProgress(progress.loaded/progress.total)
  };

  xhr.onload = () => {
    const blob = xhr.response;
    onComplete(blob)
  };

  xhr.send();
}

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

export const reportError = (error) => {
  switch (error.code) {
    case 'storage/object-not-found':
      console.log("I cannot find the object. I have the stupid");
      break;
    case 'storage/unauthorized':
      console.log("HEY! You don't have access");
      break;
    case 'storage/canceled':
      console.log("Oops! Download Cancelled");
      break;
    case 'storage/unknown':
      console.log("Oops! Unknown Error");
      break;
  }   
}
