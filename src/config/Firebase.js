import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // For auth
import { getFirestore } from 'firebase/firestore'; // For firestore

const firebaseConfig = {
  apiKey: "AIzaSyCMo2-ooZ_qD8Wip6roGRw-t5gCZW8A-DI",
  authDomain: "assignment3--mdev1005.firebaseapp.com",
  projectId: "assignment3--mdev1005",
  storageBucket: "assignment3--mdev1005.appspot.com",
  messagingSenderId: "562086970629",
  appId: "1:562086970629:web:42fe82fcf5d9343c8da36c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
