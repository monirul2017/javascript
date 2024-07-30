// event delegete

let main = document.getElementById('list-container');

main.addEventListener('click',(event)=>{

    event.target.parentNode.removeChild(event.target);
})



let btn = document.getElementById('add');

btn.style.marginLeft = '40px'
btn.style.padding= '4px 20px '



btn.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.innerHTML = "this is also list";

    main.appendChild(li)
})


// event bubbling


let parent = document.getElementById('event-bubble');

parent.addEventListener('click',function(event){
    console.log( 'ul clicked');
    event.stopPropagation()
})




let li = document.getElementById('bubble2');

li.addEventListener('click',function(event){
    console.log( 'li clicked');
    event.stopPropagation()

})


document.body.addEventListener('click',function(event){
    console.log( 'body clicked');
    event.stopPropagation()

})


// input testing

let input = document.getElementById('input');
let inputbtn = document.getElementById('input-btn');
let inputheading = document.getElementById('input-heading');

input.addEventListener('keyup',(event)=>{
    if (event.target.value === "name" ) {
        
        inputbtn.removeAttribute('disabled')
    }else{
        inputbtn.setAttribute('disabled',true)
    }
})























