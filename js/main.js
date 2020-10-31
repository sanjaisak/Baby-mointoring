const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


var eamil="NANA";
var path = window.location.pathname;
var page = path.split("/").pop();

firebase.auth().signOut();	 
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	  // User is signed in.
  
	  
  
	  var user = firebase.auth().currentUser;
         
	  if(user != null){
  
		var email_id = user.email;
		if(page=="index.html" || page=="index.html#" || page=="signup.html#" || page=="signup#.html" )
		window.location.replace("home.html");
  
	  }
  
	} else {
	  // No user is signed in.
  
	}
  });
  function GoogleLogin() {
	//first of all create google provider object
   
	var provider=new firebase.auth.GoogleAuthProvider();
	//Login with popup window
	firebase.auth().signInWithPopup(provider).then(function () {
		//code executes after successful login
   
		alert("google");
	}).catch(function (error) {
		var errorMessage=error.message;
		alert(errorMessage);
	});
   }
 function signup(){
	var userEmail = document.getElementById("email_field1").value;
	var userPass = document.getElementById("password_field1").value;
	var userrepas = document.getElementById("password_field2").value;
	if(userrepas == userPass ){
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
  
	  window.alert("Error : " + errorMessage);
  
	  // ...
	});
	}else{
	  window.alert("password not matching");
	}
  
  }


  function login(){
  
	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
  
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
  
	  window.alert("Error : " + errorMessage);
  
	  // ...
	});
  
  }
  
  function logout(){
	firebase.auth().signOut();
  }
  