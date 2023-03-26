// function printDetails(event){
//     event.preventDefault();
//     //this is used to stop flashing the value in the console.
//     console.log(event.target.nameDetails.value);
//     console.log(event.target.mailDetails.value);
//     console.log(event.target.phoneDetails.value);
//     console.log(event.target.scheduleDateDetails.value);
//     console.log(event.target.scheduleTimeDetails.value);
// }
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover',(e) => {
    //in place of mouseover we can also use mouseut or click.
e.preventDefault();
console.log(e.target);
console.log(e.target.className);

let change2 = document.querySelector('.col-md');
change2.style.backgroundColor = 'skyblue';
change2.style.color = 'darkred';

let change21 = document.querySelector('#col-md-1');
change21.style.backgroundColor = 'skyblue';
change21.style.color = 'green';

let change22 = document.querySelector('#col-md-2');
change22.style.backgroundColor = 'skyblue';
change22.style.color = 'brown';

let change1 = document.querySelector('#my-form');
change1.style.backgroundColor = 'tomato';

let change4 = document.querySelector('.row');
change4.style.backgroundColor = 'pink';

let select = document.querySelector('.items');
select.remove();
})






// let select = document.querySelector('.items');
// // select.remove();
// //to remove the whole list
// select.firstElementChild.textContent = 'Welcome in list 1';
// //to change the text 
// select.children[1].innerHTML = '<h2>List 2</h2>'
// select.children[2].style.background = 'green';
// //to change the color of background
// select.children[2].style.color = 'white';
// //to change the color of text


