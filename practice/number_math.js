// +++++++++++++++++++++++++++ Number ++++++++++++++++++++++++++++++++++++++
// usually when we write
const num=400;
// console.log(num);
const n=new Number(500.898);
// console.log(n);
// when we declare using new keyword ,we got few methods...
// console.log(n.toString());
// console.log(n.toFixed(2));
// console.log(n.toPrecision(2));


//########################## Math ########################################################
// console.log(Math.max(11,2,3,4,99));
// console.log(Math.min(11,2,3,4,99));

// console.log(Math.random());

// when we want ,random number between given range.
const low=10;
const high=20;
const x=(Math.random()*(high-low+1))+low;
console.log(x);
