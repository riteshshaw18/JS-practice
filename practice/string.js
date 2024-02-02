//String have a primitive datatype
//1.)concatation
const name="ritesh";
const job="sde";
console.log(name+job);
//2.) modern syntax of concatation
console.log(`hello my name is ${name} and my job position is ${job}`);
// `= this symbol is know as backtick,here string interpolation takes a plae
//it creates some placeholders and directly inject the variables in it.

// how to declare string:
// 1.)
 const name1="ritesh";
// 2.) 
const  coder =new String("striver");
// we create object here.
// string got stored in memory in the form of key-value pair
// and we have plenties of functions/methods in string.
console.log(coder[0]);//we can acces values using keys
//we can acces the protype too:
// 1.)just using name. 
// 2.) name.__proto__
console.log(coder.slice(2,4));
console.log(coder.substring(2,4));
//the only difference between slice and substring method is that we can pass negatiive number inn slice but we cannt in the case of substring.
//when we give negative then it take in reverse oreder
