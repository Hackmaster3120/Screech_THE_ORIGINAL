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
roomN=localStorage.getItem("RName");
nameU=localStorage.getItem("username");
function sendMSG() {
      Msg=document.getElementById("msg").value;
      firebase.database().ref(roomN).push({
            NAME:nameU,
            MESSAGE:Msg,
            LIKES:0,
            DIS_LIKES:0
      })
      document.getElementById("msg").innerHTML="";
}
function getData() { firebase.database().ref("/"+roomN).on('value', function(snapshot) { document.getElementById("messages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log("msgid",firebase_message_id)
         console.log("msgdata",message_data)
         nameDB=message_data['NAME'];
         msgsDB=message_data['MESSAGE'];
         likesDB=message_data['LIKES'];
         dlikesDB=message_data['DIS_LIKES'];
         nametag="<h4>"+nameDB+"<img class='user_tick' src='tick.png'></h4>";
         msgstag="<h4 class='msgsmsgs'>"+msgsDB+"</h4>";
         likesbtn="<button id='"+firebase_message_id+"' class='likebtn' value='"+likesDB+"' onclick='like(this.id)'><span class='glyphicon glyphicon-thumbs-up'>like:"+likesDB+"</span></button>";
         dlikesbtn="<button id='d"+firebase_message_id+"' class='dlikebtn' value='"+dlikesDB+"' onclick='dlike(this.id)'><span class='glyphicon glyphicon-thumbs-down'>like:"+dlikesDB+"</span></button>";
         theMSG=nametag+msgstag+likesbtn+dlikesbtn;
         document.getElementById("messages").innerHTML+=theMSG;
      } });  }); }
getData();
function logout() {
      localStorage.removeItem ("username")
      localStorage.removeItem("RName")
      window.location="index.html";
}
function like(btnid) {
      likes=document.getElementById(btnid).value;
      updatedlikes=Number(likes)+1;
      firebase.database().ref(roomN).child(btnid).update({
            LIKES:updatedlikes
      });
}
function dlike(btnid) {
      console.log(dlikesbtn)
      dlikes=document.getElementById(btnid).value;
      updateddlikes=Number(dlikes)+1;
      firebase.database().ref(roomN).child(btnid).update({
            DIS_LIKES:updateddlikes
      });
}