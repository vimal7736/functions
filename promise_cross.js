function getName(){
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("futura")
    },3000)
})
}
function getMObile(){
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("9847112999")
    },2000)
})
}
// Promise.all([getName(),getMObile()]).then((result)=>{
//     console.log(result);
// })

async function getUser(){
    let name= await getName ()
    console.log(`${name}`);
    let number = await getMObile()
    console.log(number);
    
}
getUser() 