let trainee = new Promise((resolve, reject) => {
    let pass= true;
    if (pass){
        resolve("task passed")
    }else
    {
        reject("task failed")
    }
})
let trainer = new Promise((resolve, reject) => {
    let pass = true;
    if(pass){
        resolve("tech passed")
    }else
    {
        reject("tech failed")
    }
})
let manager = new Promise((resolve,reject)=>{
let pass =true
if(pass){
    resolve("manger passed")
}else
{
    reject("manager failed")
}

let chief = new Promise((resolve,reject)=>{
    let pass=true
    if (pass){
        resolve("chief passed")
    }else
    {reject("chief failed")
}
})
})
