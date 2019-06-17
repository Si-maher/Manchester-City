import firebase from "firebase/app"
import 'firebase/app'
import 'firebase/database'

const config = {

    apiKey: "AIzaSyC6SbZ23SjS-3GOd386GjfLv5efS-hP0n0",
    authDomain: "mancity-862b0.firebaseapp.com",
    databaseURL: "https://mancity-862b0.firebaseio.com",
    projectId: "mancity-862b0",
    storageBucket: "mancity-862b0.appspot.com",
    messagingSenderId: "45775257252",
    // appId: "1:45775257252:web:f879cb09957e35cf"
}

firebase.initializeApp(config);
const firebaseSM = firebase.database()
const firebaseMatches = firebaseSM.ref('matches')



export {
    firebase,
    firebaseMatches
}