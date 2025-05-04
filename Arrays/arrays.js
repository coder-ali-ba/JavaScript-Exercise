// let array=["Habib", "Faix", "Talha", "Kashif", "Umair"];

             //Add To The Last
// array.push("Amir", "Yasir");
//array[array.length]="ALi"       //Add To Last WithOut Using Push
            //Remove From The Last
//array.pop()

           //Add To The Start
//array.unshift("Yasir")  ;
//array[0]="ALi"          //Replaces the 0 index Elements 
           //Remove From The Start
//array.shift()           

           //Remove Or Add From ANd AT Any Index
//array.splice(2, 0,"Yasir")               

          //Conversion to string
// let b=array.toString();
// console.log(b);
 
//let c=array.join("")     //inverted commas removes comma b/w elements
// console.log(c);
 
          //Find Single Elememt At Any Index
// console.log(array.at(4));                   //Works Same as array[]

         //Changing Element Any Index
// console.log(array[3]="Ali");

         //Delete Element From ANy Index
//delete array[3]         //Leave The Deleted Index Empty      

         //Concatenating Arrays
// array2=["ALi","Hussain"]         
// let c=array.concat(array2)         
// console.log(c);

// let c=array.concat("Ali")
// console.log(c);


        //Copy The Element At Any Index To Any Index
//array.copyWithin(2,4)  //It Will Copy Element of iIndex 4 To Index 2

        // Create Concatenated Array Of Sub Array Elements
// arr3=[["Ali"], ["Umair"], ["Murshid"]]      
// arr3.flat()

                 //FlatMap
// let arr3=[1, 7, 6 ,8];
// let d=arr3.flatMap(x=>[x, x*10]);
// console.log(d);

           //find any single elememt
// array.filter( (arr)=>{
//     console.log(arr[2]==='i');
// })           

           //find multiple elements with same properties 
// let a =['Ali', 'Habib', 'Faiz', 'Umair', 'Kashif'];
// a.filter((value)=>{
//     return value[3]=='i'
// })

           //find index of any element
// let b=['banana', 'apple', 'mango', 'cheeko'];
// let c=b.indexOf('mango');         
// console.log(c);

// let c=b.lastIndexOf('mango');
// console.log(c);

// let c=b.includes("banana");
// console.log(c);

// b.findIndex((fruit)=>{
//  console.log(fruit.length==5);
  
// })


        //Reduce Method
        // const numbers = [45, 4, 9, 16, 25];
        // let sum = numbers.reduce(myFunction);
        
        // function myFunction(total, value) {
        //   return total + value;
        // }


        let b=['banana', 'apple', 'mango', 'cheeko'];       

let c=b.entries()
console.log(c);
