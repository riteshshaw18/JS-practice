/*Points to keep in mind:
. Array is an object
. In js ,arrays are resizeble
. we can store elemets of different datatypes in same array
. In arrays,we perform shallow copy(changes done in original array)
. Indexing done with 0
*/

//Syntax:
// 1.)
const array=[1,2,3,5,6];
// console.log(array);
//2.)
const array1=new Array(1,2,3,4,5);
// console.log(array1);

//Methods
                 // 1.) push: add element in last of array
// array.push(8);
// console.log(array);
               //2.) pop():remove last element
// array.pop();
// console.log(array);
// console.log(array.length);
                //3.)unshift: It add the element at first index by 
                      //shifting the all other elements position by 1,it takes O(n) time
// array.unshift(2);
// console.log(array);
                //4.)shift: it removes the first elememt
// array.shift();
// console.log(array);
                //5.)slice:It gives a section of array,it means it return the array.
                // It doesnt include the upperbound 
                // It doesn't modify the original array.
// const array2= array.slice(1,4);
// console.log(array2);
// console.log(array);
                    /* 6.) splice: 
                            It also returns an array ,but in include upperbound
                            and it modifies the original array.
                            */
// const array3=array.splice(1,4);
// console.log(array3);
// console.log(array);
                     //7.) join: It converts the array into string seperated ny commas
// console.log(array.join());
// console.log(typeof(array.join()));

// ################################### array2 #######################
// array.push(array1);
// console.log(array);//it pushed the array1 as an array in array.

//concat: it gives an array ,with concating both the array.
// const merged_array=array.concat(array1);
// console.log(merged_array);

//spread: it spread the every elememnt of the each array,then gives it. 
//benefit of spread is we con combine multiple array is single go.

// const better_merged=[...array,...array1];
// console.log(better_merged);
// console.log(typeof(better_merged));

//flat:
// const array2=[1,2,4,[2,3,4],5,6,7,[[1,2],[3,4]]];
// const array3=array2.flat(1);//it return a array ,with all subarray concated with given depth.
// console.log(array3);

//isArray(): it checks that it is array or not.
let name="ritesh";
// console.log(Array.isArray(name));
//from(): converts into array/
let name_array=Array.from(name);
// console.log(name_array);
//intrestenig case of ,from method when we pass an object into it.
// it will give an empty array until we tell it that create array on the basis of keys or values.
// console.log(Array.from({name1 :"ritesh"}))


//of():It creates an arrray based on the given arguments
let created_array=Array.of("ritesh","deepa","rajesh","soumyadip",1);
console.log(created_array);




                  
                
                
                


