// let exam = new Promise((resolve,reject)=>{
//     let pass=false;
//     if(pass){
//         resolve("examPass")
//     }
//     else
//     {reject("examFail")}

// }
// )
// exam.then((pass)=>{
//     console.log(pass);
// }).catch((fail)=>{
//     console.log(fail);
// })




//phase 1 completed(attend phase 2)  / incomplete(failed phase 1)

//phase 2 completed(selected)    /incomplete(failed phase 2)

// let phase1 = new Promise ((resolve,reject)=>{
//     let completed =false;
//     if(completed){
//         resolve("attend phase 2")
//     }else{
//         reject("failed phase 1")
//     }

// })

// let phase2 = new Promise ((resolve,reject)=>{
//     let completed =true;
//     if(completed){
//         resolve("selected")
//     }else{
//         reject("failed phase 2")
//     }

    
// })


// // execution
// phase1.then((completed)=>{
//     console.log(completed);
//     phase2.then((s)=>{
//         console.log(s);

//     }).catch((err)=>{
//         console.log(err);
//     })
// }).catch((incomplete)=>{
//     console.log(incomplete);
// })


//check pass=>Passed / fail=>recheck 
//recheck pass=> recheck passed  / fail=>entirely failure

let checkPass = new Promise ((resolve,reject)=>{
    let pass=false;
    if(pass){
        resolve("Passed")
    }
    else{
        reject("recheck")
    }
})

let recheckPass= new Promise((resolve,reject)=>{
    let fail =true;
    if(fail){
        resolve("recheck passed")
    }else{
        reject("entirely failed")
    }
})

checkPass.then((pass)=>{
    console.log(pass);
}).catch((letsRecheck)=>{
    console.log(letsRecheck);
    recheckPass.then((x)=>{
        console.log(x);

    }).catch((cFailed)=>{
        console.log(cFailed);
    })
})




//task 
//tech
//manager
//hr