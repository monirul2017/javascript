// USING ID

let heading  = document.getElementById('heading');
heading.innerText = 'heading two';
heading.style.textTransform = 'capitalize';
heading.style.fontFamily = 'arial';

// USING CLASS

let para = document.getElementsByClassName('p');

for(let p of para){
    
  p.innerText = "This is a paragraph ";

}


// USING TAGNAME

// let tag = document.getElementsByTagName('div');

// for (let i = 0; i < tag.length; i++) {
//     const element = tag[i];
//     element.innerText = 'this is a parent of h2 and p tag'
    
// }

// USING QUERY SELECTOR

let query = document.querySelector('h3');
query.innerHTML = `<i>${query.innerText}</i>`



// USING QUERY SELECTORALL

let queryAll= document.querySelectorAll('h4');

for (const h4 of queryAll) {
    h4.innerText = 'nothing'
}

//TAGNAME
let tagname = document.getElementById('id');
tagname.innerHTML = tagname.tagName



// GET ATTRIBUTES

let get = document.getElementById('get');
get.innerHTML = get.getAttribute('id')




// SET ATTRIBUTES

let set = document.getElementById('set');
set.setAttribute('class','set')



// CREATELEMENT 

let btnparent = document.querySelector('h3');


let element = document.createElement('button');
element.innerText =' click here';
element.style.display =' block';
element.style.marginTop ='15px';
element.style.padding =' 5px 10px';
element.style.background ='purple';
element.style.color='white';
element.style.border='none';
element.style.borderRadius='3px';
element.style.cursor='pointer';
element.style.textTransform='capitalize';


btnparent.append(element)


// element.remove()
