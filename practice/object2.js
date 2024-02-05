let obj1=new Object();
let obj2={};
// console.log(obj2);

obj1.id=123
obj1.name="ritesh"
obj1.isLoggedIn=false;
// console.log(obj1);


//object in object
let user={
    name:{
            user_name:{
                first_name:"ritesh",
                middle_name:"kumar",
                last_name:"shaw"
            }
    }
}
// console.log(user.name.user_name.first_name);

// object merging/combinig

let obj3={
    1:"a",
    2:"b"
}
let obj4={
    3:"a",
    4:"b"
}
// let obj5={obj3,obj4};
// console.log(obj5);//it just put objects ,like array in the array


//another way:
// Object.assign()//it return the object,it takes elements from source and put it into target.

// Object.assign(obj3,obj4);
// console.log(obj3);

//on the above method/syntax it comes in taregt ,
//if we want it into a new object then we pass a new object as target

// let obj5=Object.assign({},obj3,obj4);
// console.log(obj5);


//another way: spread
let obj5={...obj3,...obj4};
// console.log(obj5);

console.log(Object.keys(obj1));//it gives the key in the form of array
console.log(Object.values(obj1));////it gives the value in the form of array
console.log(obj1.hasOwnProperty("isLoggedIn"));//it checks the given object contains or mot tge given property.
console.log(Object.entries(obj1));//it gives the key-value pair in the form of array




