//date is an object
// it gives time in milisecond from 1/1/1970
let myDate=new Date();//today's date
console.log(myDate.toString());
//month start with 0 in js
//we can declare dates too ,dummy dates:
let md=new Date("2023-01-23") 
//we have timestamps too
let times=date.now();//till now ka time
//convert that into sec
console.log(times/1000);
console.log(md.getDay());
//we can modify the output date 
md.toLocaleString('default',{
    weekday:"long"
} )

// we use date and time when we build some hotel checking apps.