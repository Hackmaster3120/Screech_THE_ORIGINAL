var firebaseConfig = {
      apiKey: "AIzaSyATUEl-xB5p8HyvmsUyggF9cDBauAWDuzQ",
      authDomain: "kwitter-7b904.firebaseapp.com",
      databaseURL: "https://kwitter-7b904-default-rtdb.firebaseio.com",
      projectId: "kwitter-7b904",
      storageBucket: "kwitter-7b904.appspot.com",
      messagingSenderId: "27234838682",
      appId: "1:27234838682:web:dfa3c17ccccf9a80af9723"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("username");
document.getElementById("Welcome").innerHTML="Welcome to Screech, "+username;
function addRoom() {
      newRoom=document.getElementById("NewRoom").value;
      firebase.database().ref("/").child(newRoom).update(
            {
                  purpose:"fun"
            }
      );
      localStorage.setItem("RName",newRoom);
      window.location="Room.html";
}
function getData() {
      console.log("Room_names");
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("existing_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      row="<div class='roomName' id="+Room_names+" onclick='goToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("existing_rooms").innerHTML+=row;
      });});}
getData();
function goToRoom(name) {
      localStorage.setItem("RName",name);
      window.location="Room.html";
}
function logout() {
      localStorage.removeItem ("username")
      localStorage.removeItem("Rname")
      window.location="index.html";
}
