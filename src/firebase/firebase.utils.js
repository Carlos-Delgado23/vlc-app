import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDhdOz_nl1aoC2uaeQaxD0emiBS6wLNvDo",
  authDomain: "vivalc-db.firebaseapp.com",
  projectId: "vivalc-db",
  storageBucket: "vivalc-db.appspot.com",
  messagingSenderId: "807310022342",
  appId: "1:807310022342:web:c36e3eed0bb98143eea9c7",
  measurementId: "G-HXBQS3CTK4"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase