
let phones = [
  {name:'apple',price:90000,color:'silver'},
  {name:'nokia',price:25000,color:'silver'},
  {name:'oppo',price:18000,color:'black'},
  {name:'hawei',price:30000,color:'black'},
  {name:'google',price:65000,color:'silver'},
  {name:'one plus',price:48000,color:'black'},
]

console.log(phones)


function myfunction(){

    let lowestPrice = phones[0].price;

    for (let i = 0; i < phones.length; i++) {
        const element = phones[i];

        console.log(element)

          if (lowestPrice > element.price) {
              lowestPrice = element.price
          }   
    }
    return lowestPrice;
}


let output = myfunction()

console.log("---------------")
console.log('lowest price is ', output)

// ////////////////////////////
console.log('==============')




let products = [

  {name:'phone',price:20000,color:'silver'},
  {name:'book',price:500,},
  {name:'pen',price:20},
]


function myfunction2(){

  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element)
    totalPrice += element.price;
    
  }

  return totalPrice;
}

let totalPrice = myfunction2()
console.log('total price is ',totalPrice)



// ========================
















