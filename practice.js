// // problem number 1

// function cube(input){

//     return Math.pow(input,3)


// }

// let cubeoutput = cube(3)
// console.log(cubeoutput)



// // problem 2

// function machString(str1,str2){

//     if (str1.toLowerCase().includes(str2.toLowerCase())) {
//         return true
//     }else{
//         return false
//     }

// }

// sting1= 'bangladesh',
// sting2 = 'd'



// let machoutput = machString(sting1,sting2)
// console.log(machoutput)


// // problem 3

// function sortMaker(arr) {

//     const firstElement = arr[0];
    
//     const secondElement = arr[1];
    
//     if (!Array.isArray(arr) || arr.length !== 2 || typeof firstElement !== 'number' || typeof secondElement !== 'number' || firstElement < 0 || secondElement < 0) {
    
//     return "Invalid Input";
    
//     }
    
//     else if (firstElement === secondElement) {
    
//     return "equal";
    
//     }
    
//     else if (secondElement > 0) {
    
//     return arr.sort(function(a, b){return b-a});
    
//     }
    
//     }


//     let arr = [10,20]
// let ss =sortMaker(arr)

// console.log(ss)





// // problem 4 







// // problem number 5
// function myfunction(arr,price){

//     let totalTaka = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         // console.log(element)

//         totalTaka += element;        
//     }

//     if (!arr[0]) {
//         return 'enter a valid number in first index'
        
//     }
//     else if (totalTaka > price  && arr[0]  !== 0 ) {

//         return 'you get the chips'
//     }else{
//         return 'you have no enough money'
//     }
// }


// let number = [5,10,15]

// let output = myfunction(number,20)

// console.log(output)






// // 



// let age = [12,23,20,15,24]

// function MS(input){
//     let largest = []

//     for (let i = 0; i < input.length; i++) {
//         const element = input[i];
//         console.log(element)
//         if (element) {
            
//         }

//     }

// }



// MS(age)






// function myfunction(num){
//     let firstcild = num[0]
//     let lastcild = num[1]
//     for(let i = 0; i < num.length; i++){
//         // console.log(num[i])
//     }
// {
// }
//     if(firstcild < 0 || lastcild < 0 || typeof firstcild !== 'number'|| typeof lastcild !== 'number'){
//         return 'input not valid'

//     }
//     else if(firstcild > lastcild || firstcild < lastcild){

//         return num.sort(function(a,b){

//             return b-a
//         })
//     }
//     else if(firstcild === lastcild){
//         return '2 number are equal'

//     }

// }

// let number= [80,80]
// let oo = myfunction(number)

// console.log(oo)


// //////////core concepts///////////


let h2 = document.querySelectorAll('h2')

// h2.setAttribute('id','new');
let tag = h2;


console.log(tag)



