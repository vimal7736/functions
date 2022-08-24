// adding 2 numbers ,,then taking the sum of added number and multiply with another number,,
// then taking the prodct of multiplied number and dividing
// with another number 
// function add(num1,num2,callback){
//     // error will be false .. iam setting num1 ==0 as error ,,and set
//     let err = false 
//     if (num1==0){
//         err=true
//     }
//     callback(num1+num2,err)
// }
// function multiply (num1,num2,callback){
//     callback(num1*num2)
// }
// function division (num1,num2,callback){
//     callback(num1/num2)
// }
// add(10,20 ,(sum,err)=>{
//     if (err) {
//         console.log("first number is zero");
        
//     }else{
//         console.log(sum)
//         multiply(sum,sum,(product)=>{
//             console.log(product)
//             division(product,2,(division)=>{
//                 console.log(division);
//             })
//         })
//     }

// })

function add(num1,num2) {
    return new Promise((resolve, reject) => {
        if(num1==0){
            reject("error")
        }
        resolve(num1+num2)
    });
}
function multiply(num1,num2) {
    return new Promise((resolve, reject) => {
        if(num1==0){
            reject("error")
        }
        resolve(num1*num2)
    });
}
function division(num1,num2) {
    return new Promise((resolve, reject) => {
        if(num1==0){
            reject("error")
        }
        resolve(num1/num2)
    });
}
function divisionAgain(num1,num2){
    return new Promise((resolve, reject) => {
        if (num1==0){
            reject("error")
        }
        resolve(num1/num2)
        
    });
}
add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product);
    return division(product,10)
}).then((quo)=>{
    console.log(quo);
    return divisionAgain(quo,2)

}).then((again)=>{
    console.log(again);

})
.catch((err)=>{
    console.log(err);
})
