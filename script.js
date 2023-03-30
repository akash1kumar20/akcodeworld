function printDetails(event){
    event.preventDefault();
    let item = event.target.itemDetails.value;
    let range = event.target.priceDetails.value;
   let quantity = event.target.quantityDetail.value;

   let obj = {
    item,
    range,
    quantity
   }
   let objConvert = JSON.stringify(obj);
   localStorage.setItem(item,objConvert);

   forDisplay(obj);
   finalAmount(range,quantity);
}

function forDisplay(obj){
    let displayArea = document.getElementById('toDisplay');
    let newElement = document.createElement('div');
    newElement.className = 'mt-4';
    newElement.style.color = 'black';
    newElement.textContent = "Your purchase = " + "ITEM_"+obj.item+ '__' + "PRICE_"+obj.range + '__' + "QUANTITY_"+obj.quantity;
    
    let delButton = document.createElement('button');
    delButton.className = 'btn btn-sm ms-2 delete';
    delButton.textContent = 'X';
    newElement.appendChild(delButton);

    let editButton = document.createElement('button');
    editButton.className = 'btn btn-sm ms-2 edit';
    editButton.textContent = 'Edit';
    newElement.appendChild(editButton);
    displayArea.appendChild(newElement);

    delButton.onclick = () => {
        localStorage.removeItem(obj.item);
        displayArea.removeChild(newElement);
    }
    editButton.onclick = () => {
        localStorage.removeItem(obj.item);
        displayArea.removeChild(newElement);
        document.getElementById('itemValue').value = obj.item;
        document.getElementById('priceValue').value = obj.range;
        document.getElementById('quantityValue').value = obj.quantity;
    }
}

function finalAmount (range,quantity) {
    console.log('Price =' , range);
    console.log('Quantity = ',quantity);
   
    
    let tax = () => {
      if(range>=100 && range<=150){
        taxPay = 10;
      }
      else if(range>=150 && range<=500){
        taxPay = 20;
      }
     else if(range>=500 && range<=1250){
        taxPay = 30;
     }
      return taxPay;
    }
    tax();
    console.log('Tax to pay = ',taxPay+ '%');

    let finalTaxPay = (quantity>=5)? taxPay/2 : taxPay;
    console.log('Discount on Tax = ',finalTaxPay); 
    
    let afterTaxPrice = () => {
     afterTax = (range * finalTaxPay)/100;
    }
    afterTaxPrice();
    console.log('Tax after discount = ' ,afterTax+'%');
    
    let priceForAll = afterTax*quantity
    console.log('Tax amount for', quantity, ' item is = ' , priceForAll );
    
    let finalprice = () => {
     final = parseInt(priceForAll) + parseInt(range*quantity);
     //this is the only way to add numbers here, otherwise it will print value together
     //example if try to print 80 + 100 it will give 80100    
    }
    finalprice(priceForAll,range)
    console.log('final amount to pay = ',final);
  
    let obj = {
    Price: range,
    Quantity: quantity,
    TaxPercentage: taxPay,
    DiscountonTax: finalTaxPay,
    PriceForAll : priceForAll,
    Taxamount : afterTax,
    FinalPrice : final
  }
    console.log(obj);

    displayDetails(obj)  
}

function displayDetails(obj){
    let displayArea = document.getElementById('toDisplay');
   
    let newElement1 = document.createElement('div');
    newElement1.className = 'mt-4';
    newElement1.style.color = 'black';
    newElement1.textContent = "Bill Summary :"
    
    let newElement2 = document.createElement('div');
    newElement2.className = 'mt-4';
    newElement2.style.color = 'black';
    newElement2.textContent = "Price is = "+obj.Price
    
    let newElement3 = document.createElement('div');
    newElement3.className = 'mt-4';
    newElement3.style.color = 'black';
    newElement3.textContent = "Quantity is = "+obj.Quantity
    
    let newElement4 = document.createElement('div');
    newElement4.className = 'mt-4';
    newElement4.style.color = 'black';
    newElement4.textContent = 'Tax to pay = ' + obj.TaxPercentage +'%';
    
    let newElement5 = document.createElement('div');
    newElement5.className = 'mt-4';
    newElement5.style.color = 'black';
    newElement5.textContent = 'Tax on all items = ' + obj.PriceForAll;
    
    let newElement6 = document.createElement('div');
    newElement6.className = 'mt-4';
    newElement6.style.color = 'black';
    newElement6.textContent = 'Price on tax = ' + obj.Taxamount;

     
    let newElement7 = document.createElement('div');
    newElement7.className = 'mt-4';
    newElement7.style.color = 'black';
    newElement7.textContent = 'Totam Amount to pay = ' + obj.FinalPrice;
    
    let newElement8 = document.createElement('div');
    newElement8.className = 'mt-4';
    newElement8.style.color = 'black';
    newElement8.textContent = 'Tax after discount = ' + obj.DiscountonTax +'%';

    displayArea.appendChild(newElement1);
    displayArea.appendChild(newElement2);
    displayArea.appendChild(newElement3);
    displayArea.appendChild(newElement4);
    displayArea.appendChild(newElement8);
    displayArea.appendChild(newElement6);
    displayArea.appendChild(newElement5);
    displayArea.appendChild(newElement7);
    

}

