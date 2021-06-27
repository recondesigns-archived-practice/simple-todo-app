import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCanTy2Rgjq4H1VBIN9qE2pf234TuFFrzE",
    authDomain: "simple-todo-app-bb9b5.firebaseapp.com",
    projectId: "simple-todo-app-bb9b5",
    storageBucket: "simple-todo-app-bb9b5.appspot.com",
    messagingSenderId: "333735218033",
    appId: "1:333735218033:web:cddd1b5e405a03a30704d0"
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()

export default firebase