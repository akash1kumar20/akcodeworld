let createELe = document.createElement('button');
createELe.className = 'btn btn-dark mt-3 btn-dark';
// createELe.setAttribute('onClick', 'alert("HEllo")')
//with setAttribute we can also set the event listener inside the new element
createELe.id = 'new-btn';
createELeText = document.createTextNode('Submit it here');
createELe.appendChild(createELeText);
//other way to add text is createTextNode = '---value---' 
//but when we use equal to sign then we use only append not appendChild
console.log(createELe);

let makeInvisible = document.querySelector('span');
makeInvisible.style = 'display:none';

let area = document.querySelector('.row .mt-2');
let insertBefore = document.querySelector('span');
area.appendChild(createELe, insertBefore);

createELe.addEventListener('click', clicked);
//we add a event listener with our new element which we created, then call the function clicked
function clicked (e){
    // console.log('You clicked on 2nd submit button');
    // let headerChange = document.getElementById('main-header');
    // headerChange.textContent = 'This is the new header after click';
    // let ulchange = document.querySelector('.row #items');
    // console.log(ulchange);
    // ulchange.style = 'display:none';   

    // console.log(e.clientX);
    // console.log(e.clientY);
    //to get to know on where the user click on our button in reference to window

    //to find where user click on our button we have:
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    //when we want to check user click on button by holding the alt key or not
    //we can check it with shift and ctrl key also.
}
