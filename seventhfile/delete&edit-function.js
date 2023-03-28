let valueComesFrom = document.getElementById('addForm');
//items coming from form box going to ul
let valueGoesIn = document.getElementById('items');
valueComesFrom.addEventListener('submit',addItems);
//how the value comes
function addItems(e){
    e.preventDefault();

    let whatValueCome = document.getElementById('inputArea').value;
    
    let newElement = document.createElement('li');
    let valueText = document.createTextNode(whatValueCome);
    newElement.className = 'list-group-item';
   newElement.appendChild(valueText);
    valueGoesIn.appendChild(newElement);

    let delBtn = document.createElement('button');
    delBtn.className = "btn btn-danger btn-sm float-end delete";
    let delText = document.createTextNode('X');
    delBtn.appendChild(delText);
    newElement.appendChild(delBtn);

    let editBtn = document.createElement('buttoon');
    editBtn.className = "btn btn-dark float-end btn-sm me-2 edit";
    let editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);
    newElement.appendChild(editBtn);
}

//to delete element
//we can delete that value from where it goes in, so:
valueGoesIn.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete') || e.target.classList.contains('edit'));
    //we create this because we want to delete the element only on when user complete on delete button not anywhere on the element
    {
        var li = e.target.parentElement;
        //if situation is true then we create a new li which focus on the parentElement of the target
        //target here is delete class and it's parent is li
        valueGoesIn.removeChild(li);
        //and whenever goes right we want to delete that parent
        //with this we can easily delete that element.
    }
}