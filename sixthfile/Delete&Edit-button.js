let valueComeFrom = document.getElementById('addForm');
//we want that value comes from box of the form
let valueGoesTo = document.getElementById('items');
//will be added in the ul as a li
valueComeFrom.addEventListener('submit', addValue)
//we add a evenetListener which takes the value when user submit it
//and call a function -  addValue

function addValue(e){
    e.preventDefault();

    let whatValueCome = document.getElementById('inputArea').value;
    //this is the value coming from valueComeFrom

    let newElement = document.createElement('li');
    newElement.className = 'list-group-item';
    let textForNewElement = document.createTextNode(whatValueCome);
    //we create a new li which store the value and give it class 
    newElement.appendChild(textForNewElement);
    valueGoesTo.appendChild(newElement);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-end delete";
    let textForDelete = document.createTextNode('X');
    deleteBtn.appendChild(textForDelete);
    newElement.appendChild(deleteBtn);

    let editBtn = document.createElement('button');
    editBtn.className = "btn btn-dark float-end btn-sm me-2 edit";
    let textForEdit = document.createTextNode('Edit');
    editBtn.appendChild(textForEdit);
    newElement.appendChild(editBtn);
}