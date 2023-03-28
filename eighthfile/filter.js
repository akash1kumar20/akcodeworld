let comeFrom = document.querySelector('#addForm');
let goesIN  = document.querySelector('#items');
let toSearch = document.querySelector('#filter')
comeFrom.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    let valueCome = document.getElementById('inputArea').value;
    let discription = document.getElementById('descriptionArea').value;
    let newElement = document.createElement('li');
    newElement.className = 'list-group-item';
    let newElementText = document.createTextNode(valueCome);
    let newElementTextOther = document.createTextNode(discription);
    newElement.appendChild(newElementText);
    newElement.appendChild(newElementTextOther);
    // console.log(newElement);
    goesIN.appendChild(newElement);

    let btnDelete = document.createElement('button');
    let btnEdit = document.createElement('button');
    let deleteText = document.createTextNode('X');
    let editText = document.createTextNode('Edit');
    btnDelete.className = "btn btn-danger btn-sm float-end delete";
    btnEdit.className = "btn btn-dark float-end btn-sm me-2 edit";
    btnDelete.appendChild(deleteText);
    btnEdit.appendChild(editText);
    newElement.appendChild(btnDelete);
    newElement.appendChild(btnEdit);
}

goesIN.addEventListener('click', removeItem)

function removeItem(e){
    if(e.target.classList.contains('delete') || e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        goesIN.removeChild(li);
    }
}

toSearch.addEventListener('keyup', searchItems);

function searchItems(e){
    let text = e.target.value.toLowerCase();
    //converting everything into lowercase is important because it's case sensitive
    let items = goesIN.getElementsByTagName('li');
   //grabbing all the li because li have all the values of item as well as of description box
   Array.from(items).forEach(function(item){
    //we converted items HTML collection into array because iterating array is easy
    let itemNamefirst = item.firstChild.textContent;
    //everytime we type anything in the search box, it give all the li's
    let itemNamesecond = item.childNodes[1].textContent;
   
    if(itemNamefirst.toLowerCase().indexOf(text) != -1 || itemNamesecond.toLowerCase().indexOf(text) != -1) {
        item.style.display = 'block';
    }
    else{
        item.style.display = 'none';
    }
   })
}