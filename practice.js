
let array = [ 15,10,5,8,20]


function arrayavg(){

let total = 0;

    for (let i = 0; i < array.length; i++) {

        console.log(array[i])

        total =total +  array[i];
    }

    return total;
}

let total = arrayavg();

console.log('total' ,total)

console.log( "average" ,total/array.length)


// -------------------------


console.log("------------------")
console.log("------------------")
console.log("------------------")




function evenNumber (){

    for (let i = 0; i <= 20; i++) {
        if (i % 2 ===0) {
        console.log(i)
            
        }
       
    }
}

evenNumber()

console.log("------------------")
console.log("------------------")
console.log("------------------")



function oddNumber (){

    for (let i = 0; i <= 20; i++) {
        if (i % 2 !==0) {
        console.log(i)
            
        }
       
    }
}

oddNumber()



console.log("------------------")
console.log("------------------")
console.log("------------------")



function leapyear(){
    for (let i = 2000; i <= 2024; i++) {
        
      if (i % 4 === 0) {
        console.log(i , "was a leapyear")
        
      }else{
        console.log(i,' not a leapyear')
      }
        
    }

}

leapyear()


console.log("------------------")
console.log("------------------")
console.log("------------------")



let number =[12,11,15,16,23,34,50]

function leapyeararrray(){

    for (let i = 0; i < number.length; i++) {

      if (number[i] % 2 === 0) {
        console.log(number[i] , "is a even number")
        
      }else{
        console.log(number[i],'is odd')
      }
        
    }

}

leapyeararrray()
