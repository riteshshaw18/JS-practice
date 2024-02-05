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
console.log(array);
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


                  
                
                
                


