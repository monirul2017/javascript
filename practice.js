
for (let i = 0; i <= 20; i++) {
  const element =i;

  if (i % 3 === 0 && i % 5 === 0) {

    console.log('this is number is multiplie of 3 and 5')
    
  }else if(i % 5 === 0){
    console.log('this is number is multiplie of 5')

  }else if(i % 3 === 0){

    console.log('this is number is multiplie of 3')

  }else{
  console.log(element)

  }
  
}


// function for multipule calculation

function calculation(book,pen,noots){

  let perbookprice = 200;
  let perpenprice = 20;
  let pernootsprice = 50;

  let bookprice = perbookprice * book;
  let penprice = perpenprice * pen;
  let nootsprice = pernootsprice * noots

  let output = `Book Price: ${bookprice}, penprice:${penprice}, nootsprice : ${nootsprice},`;

  return output;

}

let output = calculation(4,2,2)

console.log(output)




















