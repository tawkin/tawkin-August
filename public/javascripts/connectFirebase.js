'use strict';

var fbStatus = "firebase connecting";

var config = {
    apiKey: "AIzaSyAbLtXPwdWS6QFziD6_gSk0RHottYKp93g",
    authDomain: "tawkin-2016.firebaseapp.com",
    databaseURL: "https://tawkin-2016.firebaseio.com",
    storageBucket: "tawkin-2016.appspot.com",
  };

firebase.initializeApp(config);
console.log('testFire auth preload (connectFirebase) ' + config);

//firebase.auth().signInAnonymously(); 

fbStatus = "firebase connected"; // changes to error if exists
firebase.auth().signInAnonymously().catch(function(error) {
// Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode) {
    fbStatus = errorMessage;
  } 
});

//module.exports = firebase;