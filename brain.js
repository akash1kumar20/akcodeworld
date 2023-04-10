function getDetails(event){
    event.preventDefault();

    let price = event.target.priceDetail.value;
    let dish = event.target.dishDetail.value;
    let table = event.target.tableDetail.value;
    let quantity = event.target.quantityDetail.value;

    let details = {
        price,
        dish,
        quantity,
        table

    }
    // console.log(details);

    axios.post('https://crudcrud.com/api/fd96cbb1c0694bbf8765c998046f0197/tableData' ,details)
    .then((resolve) => {
        console.log(resolve.data);
    }).catch((reject) => {
        console.log(reject);
    })

    showOnScreen(details)
}

window.addEventListener('DOMContentLoaded', () => {
   
    axios.get('https://crudcrud.com/api/fd96cbb1c0694bbf8765c998046f0197/tableData')
    .then((resolve) => {
        for(var i=0; i<resolve.data.length; i++){
            showOnScreen(resolve.data[i]);
        }
    }).catch((reject) => {
        console.log(reject);
    })
})
function showOnScreen(details){
    
    if(details.table == 'one'){
        let parent = document.getElementById('displayOne');
        let child = document.createElement('div');
        child.textContent = 'Price: ' + details.price + '__Dish: ' + details.dish + '__Quantity: ' + details.quantity;
        parent.appendChild(child);

        let btn = document.createElement('button');
        btn.textContent = 'Delete Order';
        btn.className = 'btn btn-danger btn-sm ms-2';
        child.appendChild(btn);
        btn.onclick = () => {
            axios.delete(`https://crudcrud.com/api/fd96cbb1c0694bbf8765c998046f0197/tableData/${details._id}`).then((resolve) => {
                console.log(resolve)
                parent.removeChild(child)
            }).catch((error) => {
                console.log(error)
            })
        } 

    }
        if(details.table == 'two'){
            let parent2 = document.getElementById('displayTwo');
            let child = document.createElement('div');
            child.textContent = 'Price: ' + details.price + '__Dish: ' + details.dish + '__Quantity: ' + details.quantity;
            parent2.appendChild(child);

            let btn = document.createElement('button');
        btn.textContent = 'Delete Order';
        btn.className = 'btn btn-danger btn-sm ms-2';
        child.appendChild(btn);
        btn.onclick = () => {
            axios.delete(`https://crudcrud.com/api/fd96cbb1c0694bbf8765c998046f0197/tableData/${details._id}`).then((resolve) => {
                console.log(resolve)
                parent2.removeChild(child)
            }).catch((error) => {
                console.log(error)
            })
        } 

        }
        if(details.table == 'three'){
            let parent3 = document.getElementById('displayThree');
            let child = document.createElement('div');
            child.textContent = 'Price: ' + details.price + '__Dish: ' + details.dish + '__Quantity: ' + details.quantity;
            parent3.appendChild(child);

            let btn = document.createElement('button');
            btn.textContent = 'Delete Order';
            btn.className = 'btn btn-danger btn-sm ms-2';
            child.appendChild(btn);
            btn.onclick = () => {
                axios.delete(`https://crudcrud.com/api/fd96cbb1c0694bbf8765c998046f0197/tableData/${details._id}`).then((resolve) => {
                    console.log(resolve)
                    parent3.removeChild(child)
                }).catch((error) => {
                    console.log(error)
                })
            } 

        }

      
       


}