console.dir(document);
//to get all the details of our page.
// console.log(document.domain);
//to get the IP address
console.log(document.URL);
//to get the web address
console.log(document.title);
// document.title = 'New Title'
//to print and change the title of our page
console.log(document.head);
// console.log(document.all);
//we can access the head as well as the body, actually we can access anything of HTML and css here

var titleChange = document.getElementById('header-title');
titleChange.textContent = "Change 1";
titleChange.style.backgroundColor = 'black'

let change1 = document.getElementById('heading');
change1.textContent = 'Change 2';

let forItem = document.getElementsByClassName('list-group-item');
console.log(forItem);
forItem[0].textContent = 'Change 3';
forItem[3].innerHTML = '<h2>Change 4</h2>';
forItem[1].style.fontWeight = 'bold';
forItem[2].style.color = 'white';
forItem[0].style = 'display:none'

//this list is an array so to change the color of the whole array list we need to itrate through it
for(var i=0; i<forItem.length; i++){
    forItem[i].style.backgroundColor = 'coral';
}

let submit = document.querySelector('input[type=button]');
//to change the value of submit button
submit.value = 'Click on me!';