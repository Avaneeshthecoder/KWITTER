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
//ADD YOUR FIREBASE LINKS HERE
var username = localStorage.getItem("name")
document.getElementById("user_name").innerHTML = "Welcome " + username + " !"
function addRoom() {
      roomname = document.getElementById("room_name").value
      firebase.database().ref("/").child(roomname).update({ purpose: "addingroomname" })
      localStorage.setItem("ROOMNAME", roomname)
      window.location = "kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
console.log("roomname: "+Room_names)
room="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr></hr>"
document.getElementById("output").innerHTML+=room
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name" , name)
      window.location="kwitter_page.html"
}
function logout() {
      localStorage.removeItem("name")
      localStorage.removeItem("room_name")
      window.location= "index.html"
}