
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDATQKkibvC4iBuj4KvyUcke3OUlRe1Es4",
  authDomain: "testing-917ee.firebaseapp.com",
  databaseURL: "https://testing-917ee-default-rtdb.firebaseio.com",
  projectId: "testing-917ee",
  storageBucket: "testing-917ee.appspot.com",
  messagingSenderId: "10354118814",
  appId: "1:10354118814:web:cd4e1b0ec87659f427eb8f",
  measurementId: "G-L6XXBD4QVZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");//gets the user name entered

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";//shows room name

function addRoom()
{
  room_name = document.getElementById("room_name").value;//gets room name  entered

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });//enters room nme into database

    localStorage.setItem("room_name", room_name); 
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();//shows the data on page

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
