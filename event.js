//Events and EventsListeners

// Events - to capture the action in applications
/* 

  click - onclick
  hover -onmouseover
  keyboard-onkeyup
  scroll- onscroll
  event occurs  eventslisteners 
*/

function testClick(){
    document.writeln('testClick executed')
}
function testClick1(){
    document.writeln('testClick executed')
}
 function changeName(username){
     const element=document.getElementById('username')
     element.innerText=username

 }
//  function applyBGColor(){
//      const element= document.getElementById('changeColor')
//      element.style.backgroundColor='red'
//  }
//  function removeBGColor(){
//      const element= document.getElementById('changeColor')
//      element.style.backgroundColor='white'
//  }


 function removeApplyBColor(color){
     const element=
     document.getElementById('changeColor')
     element.style.backgroundColor=color
 }

 function getData(){
     console.log('onkeyup');
 }
 function showData (){
     console.log('keydown');
 }

 function getData(){
     const element=document.getElementById('randomData')
     console.log('onkeyup',element.value);
     document.getElementById('show').innerText=
     element.value.toUpperCase()
 }
 function showData(){
     console.log('onkeydown');
 }

 function checkBoxClick(){
     const element=document.getElementById('hobbies')
     console.log(element.checked);
 }
function showData(){
    console.log('onkeydown');
}




























