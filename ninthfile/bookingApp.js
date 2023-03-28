function printDetails(event){
    event.preventDefault();
    let userName = event.target.nameDetails.value;
    let userMail = event.target.mailDetails.value;
    let userPhone = event.target.phoneDetails.value;

    let obj = {
        userName,
        userMail,
        userPhone
    }
    // obj.id = 'objValue'
    console.log(obj);
    let objConvert = JSON.stringify(obj);
    localStorage.setItem(userMail,objConvert);

    addItem(obj);
}

//here we don't add value comes from because inside above function we already call addItem function
//above function only get invoked after submit
//that's why we don't add eventListener to it.


function addItem(obj){
    let toShow = document.getElementById('containerDisplay');
    let newElement = document.createElement('li');
    newElement.textContent = obj.userName + '_' +  obj.userMail   + '_' + obj.userPhone
    toShow.appendChild(newElement);

    let btnDelete = document.createElement('button');
    btnDelete.textContent = "X";
    btnDelete.className = 'btn btn-danger ms-2 delete';
    newElement.appendChild(btnDelete);

    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.className = 'btn btn-dark ms-1 edit'
    newElement.appendChild(btnEdit);
     
    btnDelete.onclick = () => {
        localStorage.removeItem(obj.userMail);
        toShow.removeChild(newElement);

    }

    btnEdit.onclick = () => {
        localStorage.removeItem(obj.userMail);
        toShow.removeChild(newElement);
       document.getElementById('nameValue').value = obj.userName;
        document.getElementById('phoneValue').value = obj.userPhone;
        document.getElementById('mailValue').value = obj.userMail;
    }
}



