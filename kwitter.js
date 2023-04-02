const firebaseConfig = {
    apiKey: "AIzaSyCEyxBf7ZRdZabVSrGvpEmzVsey7wS_ygI",
    authDomain: "project-kwitter-ab4f8.firebaseapp.com",
    databaseURL: "https://project-kwitter-ab4f8-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-ab4f8",
    storageBucket: "project-kwitter-ab4f8.appspot.com",
    messagingSenderId: "657828215314",
    appId: "1:657828215314:web:c27fdda3480ca8806676cb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function adduser() {
    username=document.getElementById("user_name").value
    localStorage.setItem("name", username)
    window.location="kwitter_room.html"
}