//dom- Document object model (document)
//<------------------------------------------------->
        //1- create elements dynamically
         //2 delete elements dynamically
        //3 update Element dynamically
        //4  add style dynamically
        //5 remove style dynamically
        //6 hide or show Element dynamically
        //7 create table ,form, links dynamically
        //8 read the Element content or style

////                             window
//                                  |
///                             document
/////                               |
//                                html
///     ___________________________________________________________________
//    head                                                               body
//     |                                                                   |
//    title                                                      _______________________
//     |                                                        |                       |
//    text file                                                 h1                      p
///                                                             |                       |
//                                                             hello                  welcome


///dom (access the dom elements)
//*methods
//properties
//it  returs single element
// document.getElementById('id')
// document.querySelector('hi')
// document.querySelector('#id')
// document.querySelector('.classname')


//document.write("welcome to  dom  session")
//if id is present it reture element else null
const element = document.getElementById('demo')
console.log(element);
element.innerText='Dom'
element.style.background="green"

//it returns single element

const pElement=document.querySelector('.test')
console.log(pElement);

const tagElement=document.querySelector('hi')
console.log(tagElement);

const idElement =document.querySelector('#demo')
console.log(idElement);
console.log('_______________________________________________________');

// it returns array of elements if classname is  present 
///getElementsByCLassName
const personElement= document.getElementsByClassName('person')

console.log(personElement);
personElement[2].innerText ='Mumbai'

for(let i=0;i<personElement.length;i++){
    if(i===0){
        personElement[i].innerText='Vijay'
    }else if(i===1){
        personElement[i].innerText='S'

    }else{
personElement[i].innerText='chennai'
    }
    }

    console.log("------------------------------------------------------------------");
///it returns array of elements
//getElementsByTagName
    const pElements=document.getElementsByTagName('p')
    console.log(pElements);
    for(let i=0;i<pElements.length;i++){
        
        console.log(pElements[i]);
        pElements[i].style.color='blue'
    }
    console.log("-----------------------------------------------");

//it returns array of elements
const personElementsAll=document.querySelectorAll('person')
console.log(personElementsAll);
// personElementsAll.style.backgroundColor='lightgreen'
// personElementsAll.style.fontStyle='italic'
// personElementsAll.style.border='4px solid blue'
// personElementsAll.style.borderRadius='8px'

const pTags=document.querySelectorAll('p')
console.log(pTags);
console.log('------------------------------');

console.log('========CREATELEMENT============');
//create element
const h2Element=document.createElement('h2')
h2Element.innerText='this is h2 element'
console.log(h2Element);

document.body.appendChild(h2Element)
h2Element.style.color='darkblue'
h2Element.style.border='1px solid red'
h2Element

console.log('======================================================');
const labelElements=document.getElementsByTagName('label')
//adding style based on css file classes
//adding style class
labelElements[0].className='labelTag'
//adding multiple classes
labelElements[1].classList='labelBg'

console.log('================InnerHtml & InnerText============================');
const userElement=document.getElementById('user')
//innerHTML will parse the string as HTML code
userElement.innerHTML='<h1>My Name is habsy</h1>'

const user1Element=document.getElementById('user1')
//innerText will parse the string as plain text or string itself
user1Element.innerText='<h1>My Name is habsy</h1>'


console.log('------------------------------------------');


//to hide the element
const hobbiesListElemnts=document.getElementById('hobbieslist')
hobbiesListElemnts.style.display='none'

//to show the element
/* const hobbiesListElemnts=document.getElementById('hobbieslist')
 hobbiesListElemnts.style.display='block'*/

 
