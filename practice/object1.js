// Object is a non-primitive data type ,we acces it using refernce .
// it stored in heap memory
// Their are two ways for defining objects:
/*
1.) using constructor (it gives singleton(only one object of this type ))
object.create()//Creates an object that has the specified prototype or that has null prototype.
*/
// 2.)using literals(no singleton)
const user ={
    name:"ritesh",//here by default keys are  assumed as string, 
    //values are dependent on ourself,we cxan give any type of avlue.
    age:22,
    location:"kolkata",
    isLoggedin:false,
    lastActivedays:["sun","mon","tue"]
}
// console.log(user);

//ways of accesing object details
// 1.) using . it is a very common and most used method
// console.log(user.name);
// console.log(user.lastActivedays);
// 2.) using [] ,it used in some exception-cases,like if our key is defined as string(key me space hai) and 
// if we want to make any key as symbol then we use this type of accesing methos.
let sym=Symbol("mysymbol");
const user1 ={
    "full name":"ritesh",//here i am declaring full name as string
    age:22,
    location:"kolkata",
    sym:"mysymbol1",
    isLoggedin:false,
    lastActivedays:["sun","mon","tue"]
}
// console.log(user1["full name"]);
// console.log(user1);
// console.log(typeof user1.sym);//here is the problem ,it giving string but it should be symbol.
                // #### vvi ,how to add symbol in object ####


const user2 ={
    "full name":"ritesh",//here i am declaring full name as string
    age:22,
    location:"kolkata",
    [sym]:"mysymbol1",//i mentioned as symbol.
    isLoggedin:false,
    lastActivedays:["sun","mon","tue"]
}
// console.log(user2);
// console.log(typeof user2.sym);

//update values:
// user2["full name"]="ritesh shaw";
// console.log(user2);

//freeze(): it freezes the object ,no further change can be done
// Object.freeze(user2);
// user2["age"]=23;
// console.log(user2);

//in js function can be treated as variable
user2.greeting=function(){
    console.log("hello");
}
// console.log(user2.greeting);//fuction execute nhi hoga,uska reference  milega.
// console.log(user2.greeting());//it will print hello


// agar name k sath karna hai(same object ko reference karna ho tab, this ka use karte ahi )
// user2.greeting2=function(){
//     console.log(`hello,${this["full name"]}`);
// }
// console.log(user2.greeting2());
console.log(typeof(user2["sym"]));

