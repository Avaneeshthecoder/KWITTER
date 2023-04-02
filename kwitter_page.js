//YOUR FIREBASE LINKS
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
var username = localStorage.getItem("name")
var roomname = localStorage.getItem("room_name")
function updateLike(messageid) {
      likes= document.getElementById(messageid).value
      updatelike= Number(likes)+1
      console.log("CONSOLE4 "+updatelike)
      firebase.database().ref(roomname).child(messageid).update({
           like: updatelike
      })     
     }
function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        console.log("CONSOLE1 "+firebase_message_id)
                        message_data = childData;
                        console.log("CONSOLE2 "+message_data)
                        //Start code
                  name1=message_data["name"]
                  like=message_data["like"]
                  message=message_data["message"]
                  m1="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>"
                  m2="<h4 class='message_h4'>"+message+"</h4>"
                  m3="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick= updateLike(this.id)>";
                  m4="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>"
                  row=m1+m2+m3+m4
                  console.log("CONSOLE3 "+row)
                  document.getElementById("output").innerHTML+=row
                        //End code
                  }
            });
      });
}
getData();
function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      })
      document.getElementById("msg").value = ""
}
function logout() {
      localStorage.removeItem("name")
      localStorage.removeItem("room_name")
      window.location= "index.html"
}
