'use strict';

var t2 = {
  users: {
    tj: { age: 23, email: 'tj@vision-media.ca', isA: 'human' },
    tobi: { age: 1, email: 'tobi@is-amazing.com', isA: 'ferret' }
  }
};

var test1 = 'testOne';

console.log(t2);

console.log('leaving ' + test1);

t2 = JSON.stringify(t2);

console.log(t2);

// module.exports = t2;   error 'module not defined'