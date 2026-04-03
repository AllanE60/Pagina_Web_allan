import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyDsjVHUyQkpAi2A3ErfR4NqwpiCux_lRF8",
authDomain: "message-vault-94661.firebaseapp.com",
projectId: "message-vault-94661",
storageBucket: "message-vault-94661.appspot.com",
messagingSenderId: "811872505103",
appId: "1:811872505103:web:415a6275ceeeb97959427a",
measurementId: "G-16C1SQVJYJ"


};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase conectado correctamente");

export {app, analytics};