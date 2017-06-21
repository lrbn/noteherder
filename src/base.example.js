import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
<<<<<<< HEAD

const app = firebase.initializeApp ( {
=======
import 'firebase/auth'

const app = firebase.initializeApp({
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
  apiKey: "YOUR API KEY HERE",
  authDomain: "YOUR-APP.firebaseapp.com",
  databaseURL: "https://YOUR-APP.firebaseio.com",
  projectId: "YOUR-APP",
<<<<<<< HEAD
  storageBucket: "",
  messagingSenderId: "YOUR MESSAGING ID"
=======
  storageBucket: "YOUR-STORAGE-BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
})

const db = database(app)

<<<<<<< HEAD
export default Rebase.createClass(db)
=======
export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export default Rebase.createClass(db)
>>>>>>> b87b8cd03544084f456dbebf78133d92368c3f22
