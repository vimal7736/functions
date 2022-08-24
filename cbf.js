// console.log("one");
// document.getElementById("button").onclick = myFunction;
// //funtion will only execute when caling

// // so it is asyncronous call back
// function myFunction(arg){
//     console.log(arg);
// }
// // myFunction(10)
// console.log("two");
 
// console.log("one");
// const a = [2,8,9,4,5,,6,1,2,3]
// function myFunction(arg){
//     console.log(arg);
// }
// a.forEach(myFunction); //synchronous function
// console.log(a);

// const a = [1,2,3,4,5]
// a.forEach(function (value,index){
//     console.log(value,index);

// })

//let x =function(){
//     console.log("iam called from inside a fuction")
// };
// let y = function(callback){
//     console.log("let me call a function");
//     callback();
// }
// //
// let x =() => {
//     console.log("iam called from inside a fuction");
// };
// let y = (callback) => {
//     console.log("let me call a function");
//     callback();
// }
//  y(x)
 
 let add = (a, b) => a + b;
 let multiply =(a,b)=> a*b;
//  function calc(num1, num2, callback) {
//     return callback(num1, num2);
let calc =(num1, num2, callback) => callback(num1, num2)

document.getElementById("demo").innerHTML= calc(2,3,add)
document.getElementById("demo1").innerHTML= calc(2,3,multiply)
// calc(2,3,add);
//  console.log(calc(2,3,multiply));