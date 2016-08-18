'use strict';

var mobileState = "empty";

firebase.database().ref('tawkin/state')
  .on('child_added', function(dataSnapshot, prevChildKey) {  
    var item = dataSnapshot.val();
    //updateState(item.state);
    console.log(item.state);
    mobileState = item.state;
  });

 

  var ohno = "12";

//module.exports = getMobileState;