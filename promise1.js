//task 
//tech
//manager
//hr

let task =new Promise((resolve,reject)=>{
let pass =true;
if(pass){
    resolve("task passed")
}else
{
    reject("task failed")
}
})
let tech =new Promise((resolve,reject)=>{
let pass1 =true;
if(pass1){
    resolve("tech passed")
}else
{
    reject("tech failed")
}
})
let manager =new Promise((resolve,reject)=>{
let pass2 =false;
if(pass2){
    resolve("manager passed")
}else
{
    reject("manager failed")
}
})
let hr =new Promise((resolve,reject)=>{
let pass3 =true;
if(pass3){
    resolve("hr passed")
}else
{
    reject("hr failed")
}
})
// task.then((s)=>{
//     console.log(s);
//     tech.then((d)=>{
//         console.log(d);
//         manager.then((a)=>{
//             console.log(a);
//             hr.then((f)=>{
//                 console.log(f);
//             }).catch((err)=>{
//                 console.log(err);
//             })
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }).catch((err)=>{
//         console.log(err);
//     })

// }).catch((err)=>{
// console.log(err);
// })


const print=async()=>{
    try {
        let first=await task;
        console.log(first);
        let second=await tech;
        console.log(second);
        let third=await manager;
        console.log(third);
        let fourth=await hr;
        console.log(fourth);
    } catch (error) {
        console.log(error);
        
    }
    
}
print()