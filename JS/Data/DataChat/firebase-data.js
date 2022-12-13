const firebaseConfig = {
    apiKey: "AIzaSyDDtoTGnZOQgj8CN9SxTvtnBXU7QH255Ug",
    authDomain: "user-dat.firebaseapp.com",
    databaseURL: "https://user-dat-default-rtdb.firebaseio.com",
    projectId: "user-dat",
    storageBucket: "user-dat.appspot.com",
    messagingSenderId: "522586414855",
    appId: "1:522586414855:web:2b48740e5f97c4babd6fa2",
    measurementId: "G-M0Y06PWXL2"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  
  var myName = prompt('Enter your name');

  function sendMessage(){
    //Get Message
    var message = document.getElementById("message").value;

    //Save in DB
    firebase.database().ref("messages").push().set({
      "sender": myName,
      "message": message
      
    });
    
    return false;
  }
  //Message Display
  firebase.database().ref("messages").on("child_added", function(snapshot){
    var html = "";
    html += "<p>";
     html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</p>";
    document.getElementById("messages").innerHTML += html;
  });