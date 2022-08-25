
const handleClick=()=>{
    let x = new XMLHttpRequest()

x.onreadystatechange=()=>{
    console.log("readystate",x.readyState);
    console.log("status",x.status);
    if(x.readyState==4 && x.status==200){
       let res=x.responseText
        console.log(res);
        let data=JSON.parse(res)
        console.log(data);
        data.forEach(element => {
            console.log('e',element);
            document.getElementById("id").innerHTML +=`<li>${element.id}</li>`
            document.getElementById("title").innerHTML +=`<li>${element.title}</li>`
            document.getElementById("price").innerHTML +=`<li>${element.price}</li>`
        });
        // let user = data.name
        // document.getElementById("demo").innerHTML=user

    }


}

x.open("GET","https://fakestoreapi.com/products",true)
x.send()
}