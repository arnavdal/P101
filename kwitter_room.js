
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD8VlbiDICjxWXMfUjFiylM8ChWXV59S-c",
      authDomain: "classtest-58322.firebaseapp.com",
      projectId: "classtest-58322",
      storageBucket: "classtest-58322.appspot.com",
      messagingSenderId: "700232317324",
      appId: "1:700232317324:web:bad92ca1fdb2c01a26bea9"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
