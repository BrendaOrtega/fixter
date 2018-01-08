
import * as firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyBZDyszETqtSG9dSiiFAYTEkXzrYPqkOMk",
    authDomain: "fixter-67253.firebaseapp.com",
    databaseURL: "https://fixter-67253.firebaseio.com",
    projectId: "fixter-67253",
    storageBucket: "",
    messagingSenderId: "590084716663"
};
firebase.initializeApp(config);

export default firebase;