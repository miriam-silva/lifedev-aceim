
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB6l8eZBv7DleCYoWsq5wrr0wBy0PUwDAY",
    authDomain: "lifedev-dsm-misico.firebaseapp.com",
    projectId: "lifedev-dsm-misico",
    storageBucket: "lifedev-dsm-misico.firebasestorage.app",
    messagingSenderId: "330041732529",
    appId: "1:330041732529:web:b60240fe3d6c8a1b99a190",
    measurementId: "G-6TSYR6D9FF"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }