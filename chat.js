// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBvM7uF97IGZiI46vlpF1KJ6o503kT0GYk",
    authDomain: "kwitterbase2.firebaseapp.com",
    databaseURL: "https://kwitterbase2-default-rtdb.firebaseio.com",
    projectId: "kwitterbase2",
    storageBucket: "kwitterbase2.appspot.com",
    messagingSenderId: "82825657217",
    appId: "1:82825657217:web:a99a85eb99e1728ebfc680"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



