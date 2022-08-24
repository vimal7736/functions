let persons = [
    {
        name: "vikas",
        age: 23
    },
    {
        name: "vinay",
        age: 35
    }
]

let display =()=>{
    setTimeout(()=>{ 

        // array.forEach(element => {
            
        // });
        persons.forEach(arrayElement => {
            document.getElementById("demo").innerHTML+=`<li>${arrayElement.name+ " " + arrayElement.age}</li>`    
        });

    },2000);
}
// function create(user, display) {
//     setTimeout(() => {
//         persons.push(user);
//         console.log(user);
//         display();


//     }, 4000);

// }
let create = (user)=> {
    setTimeout(()=>{
        persons.push(user)
        console.log(user);
        display()


    },7000);
    
}
create({name:"vivek",age:21})

