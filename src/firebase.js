import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBmpDlrDYtG7ikTLUp1dfpEP8Z32L7hqnE",
    authDomain: "mycovid-d7a4f.firebaseapp.com",
    databaseURL: "https://mycovid-d7a4f.firebaseio.com",
    projectId: "mycovid-d7a4f",
    storageBucket: "mycovid-d7a4f.appspot.com",
    messagingSenderId: "631713320426",
    appId: "1:631713320426:web:e41a593cecff0a03db3693"
}

firebase.initializeApp(config)
const db = firebase.database()
export default firebase

export {db}