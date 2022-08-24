// function myFunction(user){
//     return user
    
// }
// // myFunctio("user")===function calling
// const Fun=user=>user



// let result=Fun("abc")
// console.log(result);

// let hello;
// hello = () => {
//     return "this world";
// }
// let set = hello()
// console.log(set);

// let hello;
// hello =(value) => "Hello " + value;
// document.getElementById("demo").innerHTML=hello("vimal")

// let paw = (user,callback)=> {
//     console.log(user);
//     callback()
// }
// let bae =() =>
// {
//     console.log("second");
// }
// paw("first",bae)


// paw() calling


// let f=(f2)=>{
//     setTimeout(() => {
//         console.log("qwerty");
//         f2()
        
//     }, 2000);

// }
// let f2=()=>{
//     console.log("Zxcv");
// }

// f(f2)



// setTimeout(() => {
//     console.log("qwerty");
    
// },3000 );

// setInterval(() => {
//     console.log("qwerty");
// }, 3000);


//add(a,b)  sum

//sub(sum)  sum-10

// let sum =(a,b,sub)=> {
//     //return(a+b);
    
//    // x=sum(5,10)
//    // console.log(x);
//    let val=a+b;
//    sub(val)
    
    
// }

// let sub =(val)=>{
//    console.log(val-10); 
   
// }
// sum(10,20,sub)



//array 
//display li -3s
//create   add  -4s

let persons = [
    {name:"vimal",age:28},
    {name:"Harshitha",age:26},
    {name:"punya",age:22},
    {name:"hrishi",age:31}
]

let display =()=> {
    setTimeout(() => {
        persons.forEach(element => {
            document.getElementById('demo').innerHTML+=`<li>${element.name}</li>`
        });
    },3000)
}
let create =(user,display)=> {
    setTimeout(() => {
        persons.push(user)
        console.log(persons);
        display()
    }, 4000);

}

create({name:"anu",age:21},display)
create({name:"alen",age:21})







// setTimeout((name) =>{
// console.log(),4000;
// })
//display}
//setTimeout -3s
//forEach
//innerHTML li


//create
//setTimeout -4s
//push


//display ==>create
//create()