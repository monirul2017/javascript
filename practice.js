
let arr = ['moni','raju','bayezid','anower','moni','raju','bayezid','anower','moni','raju','bayezid','anower','moni','raju','bayezid','anower'];

console.log(arr)

function deleteDuplicateItem(){

  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (newArray.includes(element) === false) {

      newArray.push(element)
      
    }
  }
  return newArray;
}


let output = deleteDuplicateItem()

console.log(output)




















