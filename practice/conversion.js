// let a=33;
// let b=String(a);
// console.log(typeof(b));
let a="88";
let b=Number(a);
let c="88w";
let d=Number(c);
let e=null;
let f=Number(e);
let g="";
let h=Boolean(g);
let i="rit";
let j=Boolean(i);
console.table([typeof(b),typeof(d),typeof(f),typeof(h),typeof(j)]);
console.table([b,d,f,h,j]);

// 33=33
//33a=NaN
//null=0
//undefined=NaN
//""=false
//ritesh=true
//true=1
//false=0