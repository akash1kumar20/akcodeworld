let itemList = document.getElementById('items');
console.log(itemList.parentNode);
//to figure out who is the parentNode of items
//and it's under class <div class="mt-3">
//<h3> is not a parentNode, it's sibling of this node.

itemList.parentNode.style.backgroundColor = 'green';
console.log(itemList.parentNode.parentNode);
//to find the parent of the class <div class="mt-3">, and we can go so on.
itemList.parentNode.parentNode.style.border = '3px solid red';

console.log(itemList.parentNode.parentNode.parentNode);
itemList.parentNode.parentNode.parentNode.style.border = '4px solid purple';

console.log(itemList.parentNode.parentNode.parentNode.parentNode);
itemList.parentNode.parentNode.parentNode.parentNode.style.border = '5px solid black';

console.log('Node',itemList.parentNode.parentNode.parentNode.parentNode.parentNode);
console.log('Element',itemList.parentElement.parentElement.parentElement.parentElement.parentElement);
//parentNode and parentElement are same thing, just two different names.
itemList.parentNode.parentNode.parentNode.parentNode.parentNode.style.border = '5px solid brown'
//the parent node we get in this is body

//1st parent - brown color border
//2nd parent - black color border
//3rd parent - purple color border
//4th parent - red color border
//5th parent - green color
