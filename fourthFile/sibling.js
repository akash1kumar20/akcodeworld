let goIn = document.getElementById('items');
console.log(goIn.nextSibling);
//like the child node firstchild the nextSibling also grab the blank space.
//for this situation we have nextElementSibling
console.log(goIn.nextElementSibling);
goIn.nextElementSibling.style = 'display:none'
//this will give us the next sibling in the list, we can also find which is previous sibling
console.log(goIn.previousElementSibling);
goIn.previousElementSibling.style.backgroundColor = 'green'
goIn.previousElementSibling.style.fontSize = '50px'


//creating new element
let newButton =  document.createElement('button');
console.log(newButton);
newButton.className = 'btn btn-dark';
newButton.id = 'bt_1';
newButton.setAttribute('title','Attribute');
//The setAttribute() method sets a new value to an attribute.
newButtonText = document.createTextNode('Click On Me!');
//this is the way to add some text inside our button
newButton.appendChild(newButtonText);
//we are pushing our text inside the button

let placeWhereWeWantToInsert = document.querySelector('.row .mt-2');
// console.log(placeWhereWeWantToInsert);
let beforeWhichElementWeWantToInsert = document.querySelector('span');
placeWhereWeWantToInsert.insertBefore(newButton, beforeWhichElementWeWantToInsert);

//Steps to add an elemenet:
//Step 1 - createElement  (making of new element)
//Step 2 - createTextNode (adding text to that element)
//Step 3 - select a place where you want to add a element
//Step 4 - choose a element before which  you wawnt to add new element
//Step 5 - appendChild (push the element into the area and also specify the element over which you want to add);