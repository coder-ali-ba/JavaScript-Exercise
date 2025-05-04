let url ="https://catfact.ninja/breeds?limit=1"
const breed=document.getElementById("breed");
const airQual = async () => {
    console.log("GETTING dATA....");
    let response= (await fetch(url));
    console.log(response);
    let data =await response.json();
    console.log(data.data[0].breed);
    breed.innerText=data.data[0].breed;
}


 let URL="https://uselessfacts.jsph.pl/api/v2/facts/random?language=de";


const getDetails = async () => {
let response = (await fetch(URL));
let data =await response.json()
console.log(data);
console.log(data.text);
let b = document.getElementById("p");
b.innerText=data.text;
}


