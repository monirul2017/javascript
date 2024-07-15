const person = {
    name:'messi',
    age:37,
    nationality:'argentina',
    height:'5 fit 7 inch'
}

console.log(person)


let objProperty = Object.keys(person);

let objValue = Object.values(person)

for (let i = 0; i < objProperty.length; i++) {

    console.log(objProperty[i] ,"====" ,objValue[i])
    
}

console.log("------------------")


for(let val in person){
    console.log(val, '='  ,person[val])

}






