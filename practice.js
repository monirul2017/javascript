// problem number 1

function cube(input){

    return Math.pow(input,3)


}

let cubeoutput = cube(3)
console.log(cubeoutput)



// problem 2

function machString(str1,str2){

    if (str1.toLowerCase().includes(str2.toLowerCase())) {
        return true
    }else{
        return false
    }

}

sting1= 'bangladesh',
sting2 = 'd'



let machoutput = machString(sting1,sting2)
console.log(machoutput)


// problem 3

function sortMaker(arr) {

    const firstElement = arr[0];
    
    const secondElement = arr[1];
    
    if (!Array.isArray(arr) || arr.length !== 2 || typeof firstElement !== 'number' || typeof secondElement !== 'number' || firstElement < 0 || secondElement < 0) {
    
    return "Invalid Input";
    
    }
    
    else if (firstElement === secondElement) {
    
    return "equal";
    
    }
    
    else if (secondElement > 0) {
    
    return arr.sort(function(a, b){return b-a});
    
    }
    
    }


    let arr = [10,20]
let ss =sortMaker(arr)

console.log(ss)





// problem 4 







// problem number 5
function myfunction(arr,price){

    let totalTaka = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // console.log(element)

        totalTaka += element;        
    }

    if (!arr[0]) {
        return 'enter a valid number in first index'
        
    }
    else if (totalTaka > price  && arr[0]  !== 0 ) {

        return 'you get the chips'
    }else{
        return 'you have no enough money'
    }
}


let number = [5,10,15]

let output = myfunction(number,20)

console.log(output)

