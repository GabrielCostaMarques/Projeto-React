import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzaPCu0gHjXL4rjZASnfn2MMmlk8gZyfE",
  authDomain: "miniblog-8e41d.firebaseapp.com",
  projectId: "miniblog-8e41d",
  storageBucket: "miniblog-8e41d.appspot.com",
  messagingSenderId: "501843022435",
  appId: "1:501843022435:web:b51ef313a454df7f301e56"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};