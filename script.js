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


    axios.post("https://crudcrud.com/api/7e29463c1c5c4a108c31423c23c78295/userData", everyDetails).then((response) => {
    showNewUserOnScreen(response.data);    
    console.log(response);
    }).catch((error) => {
        document.body.innerHTML += '<h2>Error 404</h2>';
        console.log(error);
    })
}

//by doing this our data will remain on screen even after refreshing the page.
window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/7e29463c1c5c4a108c31423c23c78295/userData")
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

    delBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/7e29463c1c5c4a108c31423c23c78295/userData/${everyDetails._id}`).then((response) => {
            console.log(response);
            toShow.removeChild(create);
        }).catch((error) => {
            console.log(error);
        })
    }

    editBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/7e29463c1c5c4a108c31423c23c78295/userData/${everyDetails._id}`).then((response) => {
            console.log(response);
            toShow.removeChild(create);
        }).catch((error) => {
            console.log(error);
        })

        axios.put(`https://crudcrud.com/api/7e29463c1c5c4a108c31423c23c78295/userData/${everyDetails._id}`,{
            nameData: document.getElementById('nameData').value = everyDetails.userName,
            mailData:  document.getElementById('mailData').value = everyDetails.userMail,
            phoneData: document.getElementById('phoneData').value = everyDetails.userPhone
        }).then((respone) => {
            console.log(respone);
            create.textContent = respone.data.nameData + '--' + respone.data.mailData + '--' + response.data.userPhone
        }).catch((error) => {
            console.log(error);
        })
        
    }
}