function printDetails(event){
    event.preventDefault();
    let department = (event.target.departmentValue.value);
    let salaryRange = (event.target.salaryRangetValue.value);

    let newObj = {
        department,
        salaryRange
    }
    console.log(newObj);

    showOnPage(newObj,salaryRange)
}
function showOnPage(newObj,salaryRange){
    // console.log(salaryRange);
    
  let toShowTax = () => {
    if(salaryRange==='0'){
      toShow = 0;
    }
    else if(salaryRange==='5'){
      toShow = 5;
    }
    else if(salaryRange==='10'){
        toShow = 10;
      }
      else if(salaryRange==='15'){
        toShow = 15;
      }
      else if(salaryRange==='20'){
        toShow = 20;
      }
      else if(salaryRange==='30'){
        toShow = 30;
      }
    return toShow;
  }
  toShowTax();
console.log('Tax to be dedcuted on your income is',toShow+'%');
  


let display = document.getElementById('toDisplay');
let newElement = document.createElement('div');
newElement.className = 'slab mt-2 mb-2';
newElement.textContent = 'Tax to be dedcuted on your income is '+ toShow +'%'
display.appendChild(newElement);
let newButton = document.createElement('button');
newButton.className = 'btn btn-warning mb-2';
newButton.textContent = 'Check Other Details';
display.appendChild(newButton);
    
newButton.onclick = () =>{

    let valueDisplay = document.createElement('input');
    valueDisplay.setAttribute = ('type', 'text');
    valueDisplay.placeholder = 'Type your salary here in LPA...'
    console.log(valueDisplay);
    valueDisplay.className= 'type-text mt-2 mb-2';
    valueDisplay.id = 'id-one'
    let otherButton = document.createElement('button');
    otherButton.className = 'btn btn-warning btn-sm mt-2 mb-2';
    otherButton.textContent = 'Submit';
    display.appendChild(valueDisplay);
    display.appendChild(otherButton);

    otherButton.onclick = () => {
        let exactSalary = document.getElementById('id-one').value;
        // console.log(exactSalary);
        
        let amountToBeDedcuted = () => {
            // console.log('Test',toShow);
            if(toShow===0){
                amount = 0;
                salaryLeft = exactSalary - amount;
            }
            else if(toShow===5){
                amount = (exactSalary * toShow)/100;
                salaryLeft = exactSalary - amount;
            }
            else if(toShow===10){
                amount = (exactSalary * toShow)/100;
                salaryLeft = exactSalary - amount;
            }
            else if(toShow===15){
                amount = (exactSalary * toShow)/100;
                salaryLeft = exactSalary - amount;
            }
            else if(toShow===20){
                amount = (exactSalary * toShow)/100;
                salaryLeft = exactSalary - amount;
            }
            else if(toShow===30){
                amount = (exactSalary * toShow)/100;
                salaryLeft = exactSalary - amount;
            }
            return amount;

        }   
        amountToBeDedcuted();

        let newDiv = document.createElement('div');
        newDiv.textContent = 'Amount deducted on your salary is ' + amount;
        newDiv.className = 'mt-2 mb-2';
        newDiv.style.border = '1px solid red';
        display.appendChild(newDiv);
        
        let otherDiv = document.createElement('div');
        otherDiv.textContent = 'Final salary after deduction is ' + salaryLeft;
        otherDiv.className = 'mt-2 mb-2'
        otherDiv.style.border = '1px solid green';
        display.appendChild(otherDiv);
        
        console.log('Amount',amount);
        console.log('salary',salaryLeft);

    }
}
}
