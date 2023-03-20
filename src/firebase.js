import {initializeApp} from "firebase/app"
import firebaseConfig from "./config/firebaseConfig"
import {getAuth} from "firebase/auth"
import "firebase/compat/auth"

const firebaseApp= initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
export {auth};