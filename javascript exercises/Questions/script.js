console.log([] == ![]); 
if(![] == []){
    console.log("yes"); 
}
console.log([]);
console.log(![]);


console.log([] + []);
console.log(0.1 + 0.2 == 0.3);    //Due to floating-point precision issues in JavaScript, 0.1 + 0.2 results in 0.30000000000000004, which is not exactly equal to 0.3.


console.log([] == false);
console.log([] == true);
console.log({} == false);
console.log({} == true);

if({}){
    console.log("yes");
    
}

console.log([1] == true);
