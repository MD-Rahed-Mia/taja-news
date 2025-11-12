import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBJW0X370wG0atI4hUMUyrBazYASYzzHKU",
  authDomain: "linkdin-clone-c959a.firebaseapp.com",
  projectId: "linkdin-clone-c959a",
  storageBucket: "linkdin-clone-c959a.appspot.com",
  messagingSenderId: "360160244014",
  appId: "1:360160244014:web:45360757dcff8542488abf",
  measurementId: "G-KD97NS21WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);