let b =parseInt(prompt("Type Ypour Number")) 
document.getElementById("user1").addEventListener("click", ()=>{
    let a =Math.ceil(Math.random() * 14);
    console.log(a);
    
    if(a==b){
        alert("Equal")
    }else if (a > b){
        alert("greater")
    }else{
        alert("Smaller")
    }
})
