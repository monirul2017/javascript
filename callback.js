// CALLBACK FUNCTION

// function callBackFunc(number,callback){

// setTimeout(() => {
    
    
//     if (callback) {
//         callback()
//     }
//     console.log(number)

// }, 2000);
// }

// callBackFunc('coming',()=>{
//     callBackFunc('more',()=>{
//         callBackFunc(4,()=>{
//             callBackFunc(9,()=>{
//                 callBackFunc(2017)
//             })
//         })
//     })
// })


// PROMISES


// function promiseFunc(params,callback){

//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             resolve('this promises is true');
//             console.log('more')
            
//         }, 2000);
//     })

// }



// ONE
// promiseFunc().then((res)=>{
//     console.log(res);
//     promiseFunc().then((res)=>{
//         console.log(res);
//         promiseFunc().then((res)=>{
//             console.log(res);
//             promiseFunc().then((res)=>{
//                 console.log(res);
//                 promiseFunc().then((res)=>{
//                     console.log(res)
//                 })
                
//             })
            
//         })
        
//     })
    
// })


// TWO
// promiseFunc().then((res)=>{
//         console.log(res);
//         return promiseFunc()
//     }).then((res)=>{
//         console.log(res);
//         return promiseFunc()
//     }).then((res)=>{
//         console.log(res);
//         return promiseFunc()
//     }).then((res)=>{
//         console.log(res);
//         return promiseFunc()
//     }).then((res)=>{
//         console.log(res);
//         return promiseFunc()
//     })


// ASYNC AWAIT

function promiseFunc(params,callback){

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve('this promises is true');
            reject('error')
            console.log('more')
            
        }, 2000);
    })

}


async function ASYNK (){

    let a = promiseFunc();
   await a.then((res)=>{

        console.log(res)
    })

   let b = promiseFunc();
   await  b.then((res)=>{

        console.log(res)
    })

    let c = promiseFunc();
   await  c.then((res)=>{

        console.log(res)
    })


}

ASYNK()










