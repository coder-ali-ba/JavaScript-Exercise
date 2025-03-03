var sum = 1
for (i=0; i<=10; i++){
    sum+=i
}
console.log(sum);



// 1+0=1
// 1+1=2
// 2+2=4
// 4+3=7
// 7+4=11
// 11+5=16
// 16+6=22
// 22+7=29
// 29+8=37
// 37=9=46
// 46+10=56





function myFun(a){
   for(i=0; i<10; i++){
    if(a){
        console.log("Aliba");
        
    }else{
        console.log("liaba");
        
    }
   }
}
myFun('')


function set(){
    console.log("hello");
    
}
setTimeout(set, 5000)



console.log("hi");

setTimeout(()=>{
    console.log("hello");
    
},3000)

console.log("hi Ali");


function fun1(a, b){
    console.log(a+b);
    
}
function fun2(a , b, cl){
    
    cl(4,8)
    console.log(a*b);
    
}

fun2(2,3 , fun1)




function getDataId(dataId){
    setTimeout(()=>{
        console.log("data", dataId);
        
    } ,3000)
}
getDataId(23)


function getDataId(){
    console.log("data");
    
}

setTimeout(getDataId, 3000)


function getData(data1, data2){
setTimeout( ()=>{
    console.log("Habib" ,data1);
    if(data2){
       data2();
    }
    
},2000)
}
getData(1, ()=>{
    getData(2)
})


function getName(name1,name2){
   setTimeout( ()=>{
    console.log("Habib", name1);
    if(name2){
        name2()
    }
   },2000)
   
}
getName(1, ()=>{
    getName(2)
})



let arrZ=["Habib", "Ferox", "Umair", "Kashif", "Talha"]
arrZ.find(function (item){
console.log(item.slice(-2));
})

let arrY=["Habib", "Ferox", "Umair", "Kashif", "Talha"]
arrY.find(function (item){
    if(item[item.length-1]=='x'){
console.log(item.slice(-2));
}
})


let arrX=[["Habib","ali"], ["Ferox","Faix"], ["Umair","ahmed"], ["Kashif","chawla"], ["Talha","seth"]]

arrX.filter(function(index){
    arr[index];
let a =index[index.length-1];
console.log(a);

    
})

let str1= "habibAli";
let str3=str1.charAt(2)
console.log(str3);
let str2 =str.charCodeAt(4);
console.log(str2);
console.log(str[2]);
console.log(str.at(1));
console.log(str.slice(1,6));
console.log(str.substring(2, 3));





let arr12=[1,2, 3,4];
let sum=0;
for(i=0; i<=arr12.length; i++){
sum+=i
}
console.log(sum);




var a ="Habibali";
var b=a.split("");
var c= b.reverse()
var d =c.join("")





var text=prompt("enter your worg");
function func(){
    let arr=text.split("");
    let arrev=arr.reverse();
    let tost=arrev.join("")
    if(text==tost){
        console.log("is pallindrome"); 
    }else{
       console.log("is not pall");   
    }   
}
 func()



let arra=[3,5,8,6,9,4,2];
console.log(Math.max(...arra));


let numbers1=[1,2,3,4,5,5,4,3,2,1,];
let emptyArray=[];
numbers1.forEach((num)=>{
    if(!emptyArray.includes(num)){
        emptyArray.push(num)
    }
})




let names1= ["habib", "umair", "wasim", "faiz"];
let newNames=names1.sort();






        //  reverse an array of objects
let arrayofObject=[
    {
        name:"ALi",
        class:"x",
        rollNo:27
    },
    {
        name:"wasim",
        class:"IX",
        rollNo:23
    },
    {
        name:"umair",
        class:"XI",
        rollNo:53
    }
];
arrayofObject.sort((a , b)=>{
    if(a.name < b.name[1]){
        return 1
    }else if(a.name > b.name){
        return -1
    }else{
        return 0
    }
})



  // sort an array of objects
let arrayObject=[
    {
        name:"ALi",
        class:"x",
        rollNo:27
    },
    {
        name:"wasim",
        class:"IX",
        rollNo:23
    },
    {
        name:"umair",
        class:"XI",
        rollNo:53
    }
];
arrayObject.sort((a , b)=>{
    if(a.name < b.name[1]){
        return -1
    }else if(a.name > b.name){
        return 1
    }else{
        return 0
    }
})



let names13= ["habib", "umair", "wasim", "faiz"];
let nums13= [3, 4, 7 ,9 ,5];
nums13.forEach((num , index)=>{
   console.log(`${index} square of ${num} = ${Math.pow(num , 2)} `);
   
});


let names= ["habib", "umair", "wasim", "faiz"];
let nums= [3, 4, 7 ,9 ,5];
nums.map((num , index)=>{
   console.log(`${index} square of ${num} = ${Math.pow(num , 2)} `);
   
});







let num1=parseInt(prompt("Enter Your Number"));
let num2=parseInt(prompt("Enter second Number"));

 sumFun = () =>{
  alert(num1 + num2);
 }
 sumFun()


let str=prompt("Type Somethimg");
strFun = () => {
  let strTo=str.split("");
  let toRev=strTo.reverse()
 let joinTo=toRev.join("")
  console.log(joinTo);
  
}
strFun()



let Array1=[12, 36, 56, 76, 67 ,98];

function Num(){
  let maxNum=Math.min(...Array1);
  console.log(maxNum);
  
}
Num();


let givenStr=prompt("Type something");

function checkPall(){
  let z=givenStr.split("");
  let y=z.reverse();
  let x=y.join("");
  
  if(givenStr === x){
    alert("is Pall")
  }else{
    alert("Not Pall")
  }
};
checkPall()



for(i=0; i<=100; i++){
  if(i%3==0){
    console.log(i + "fizz"); 
  }
  if(i%5==0){
    console.log(i + "buzz");
    }
  if(i%3==0 && i%5==0){
    console.log(i + "FizzBuzz");
    
  }  
}





// 4. Objects & Arrays
// Task 13: Create an object that stores information about a book (title, author, pages) and includes a method that returns a summary of the book.




//

// 6. Asynchronous JavaScript
// Task 20: Write a function that fetches data from an API using fetch() and logs the response to the console.
// Task 21: Use async/await to handle an asynchronous operation like reading a file or fetching data from an API.
// Task 22: Implement a function that takes an array of promises and returns a single promise that resolves when all promises have been resolved (Promise.all).
// Task 23: Create a function that simulates a delay using setTimeout or setInterval.
// 7. DOM Manipulation
// Task 24: Write a function that changes the background color of a webpage when a button is clicked.
// Task 25: Create a simple to-do list app where users can add, delete, and mark tasks as complete.
// Task 26: Write a function that toggles the visibility of an element when a button is clicked.
// Task 27: Create a program that validates a form input (e.g., email format, password strength).
// 8. Advanced Topics
// Task 28: Implement a simple version of a deep clone function to clone an object deeply (copying nested objects).
// Task 29: Write a function that creates a custom EventEmitter with methods to subscribe, unsubscribe, and emit events.
// Task 30: Create a basic implementation of a promise from scratch (i.e., a simple then/catch mechanism).
// Task 31: Write a debounce function that limits the rate at which a function can fire (e.g., for an input field search).
// 9. Error Handling
// Task 32: Write a function that performs division and handles division by zero with proper error handling (throw an error or return a message).
// Task 33: Implement a function that tries to parse a string as JSON and handles any errors appropriately.
// Task 34: Write a function that catches asynchronous errors using try/catch in combination with async/await.




// Task 14: Write a function that sorts an array of objects based on a property (e.g., sorting an array of books by the title).


let arr = [
  {
    title:"English",
    class:"X",
    BookNo:12
  },
  {
    title:"Arabic",
    class:"XI",
    BookNo:15
  },
  {
    title:"History",
    class:"IX",
    BookNo:17
  }
];

 let z = arr.sort( (a, b)=>{
  if(a.title < b.title){
    return -1
  }else if(a.title > b.title){
    return 1
  }else{
    return 0
  }
})         


// Task 15: Create a function that merges two arrays and removes any duplicates.

let arr1 =[1 ,3 ,4, 5, 6];
let arr2=[3,5, 7, 9,4];


  let arr3=arr1.concat(arr2) ;
  let empArray=[];
 arr3.forEach( (num)=>{
  if(!empArray.includes(num)){
    empArray.push(num)
  }
 })
  


// Task 16: Write a program that finds the average of an array of numbers, excluding the minimum and maximum numbers.
// 5. Higher-Order Functions


const numbers = [12 , 34 , 89 , 90 , 46 , 23 , 32 , 57 , 94];
let sum = 0;
function fun1(){
  for(i=0; i<numbers.length; i++){
    sum+=numbers[i];
  }
   
  let ave=sum/numbers.length;
  console.log(ave);
  
};
fun1()


numbers.forEach(num => {
  sum += num;
});
console.log(sum/numbers.length);



// Task 18: Write a function that accepts an array and another function as parameters and filters the array based on the criteria defined in the passed function (like Array.prototype.filter). 


let arrFun=[12, 23, 24, 56, 21, 19, 26];
fun4 = () => {
  let multiples=arrFun.filter((nums)=>{
    return nums%2==0
  })
  return multiples
};


function myFunc(laspo,arrywo){
console.log(arrywo);
console.log(laspo);
};

myFunc(fun4(), arrFun)



// Task 19: Create a function that takes two arrays and returns a new array containing only the elements that are in both arrays (intersection).

let y=[1, 3, 5, 6, 7, 8, 9];
let w=[2, 3, 4, 6, 10, 8, 11];


let x=y.filter((num)=>{
  return w.includes(num)
})
console.log(x);


const person = { name: "Alice" };
const newPerson = Object.assign({}, person);
newPerson.name = "Bob";
person.age=15;
console.log(person);
console.log(newPerson);
