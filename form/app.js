let input1 =document.querySelector("#inpt1");
let input2 =document.querySelector("#inpt2");
let input3 =document.querySelector("#inpt3");
let buttn1 =document.querySelector("#buttn");
let hid= document.querySelector(".hide")

alert("Fill the form ... Name == Habib Ali , Email == aliba4545@gmail.com and Password == 12345678")
buttn1.addEventListener("click", () => {
    if(input1.value != "" && input2.value != "" && input3.value != ""){
    if(input1.value != "Habib Ali" && input2.value != "aliba4545@gmail.com" && input3.value != "12345678"){
        hid.classList.remove("hide")
    } else{
        document.getElementById("head").innerText="Valid Account"
        hid.classList.remove("hide")

    }   
} 
else{
    document.getElementById("head").innerText="Please fill the form properly"
    hid.classList.remove("hide")
} })