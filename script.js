function userData(event){
    event.preventDefault();
    let userName = event.target.nameValue.value;
    let userMail = event.target.mailValue.value;
    let userPhone = event.target.phoneValue.value;

    let everyDetails = {
        userName,
        userMail,
        userPhone
    };

//    let convertData = JSON.stringify(everyDetails)
    // console.log(convertData);
    // localStorage.setItem(userMail,convertData);
    axios.post("https://crudcrud.com/api/837810a8c3f3484884023e5a7f078035/userData", everyDetails).then((response) => {
    showNewUserOnScreen(response.data);    
    console.log(response);
    }).catch((error) => {
        document.body.innerHTML += '<h2>Error 404</h2>';
        console.log(error);
    })
}

//by doing this our data will remain on screen even after refreshing the page.
window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/837810a8c3f3484884023e5a7f078035/userData")
    .then((response) => {
        console.log(response);

        for(var i=0; i<response.data.length; i++){
            showNewUserOnScreen(response.data[i]);
        }
    }).catch((error) => {
        console.log(error);
    })
})
function showNewUserOnScreen(everyDetails){
    let toShow = document.getElementById('toDisplay');
    let create = document.createElement('div');
    create.textContent = everyDetails.userName + '____' + everyDetails.userMail + '_____' + everyDetails.userPhone;
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-dark btn-sm ms-2 me-2 edit';
    editBtn.textContent = 'Edit';
    create.appendChild(editBtn);
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm ms-2 me-2 delete';
    delBtn.textContent = 'X';
    create.appendChild(delBtn);
    toShow.appendChild(create);
}