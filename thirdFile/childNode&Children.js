let takeOut = document.getElementById('items');
// console.log(takeOut.childNodes);
//the problem with childNodes is that it also take the line break
//to avoid this problem use children insted of childNode
//childNode returns the node list
//while children returns the HTML collection

console.log(takeOut.children);
takeOut.children[1].style.backgroundColor = 'green';

// console.log(takeOut.firstChild);    
//like the childNode we also have firstChild but the problem remain same
//it will also store the line break as well
//for this situtation we have a element

console.log(takeOut.firstElementChild);
takeOut.firstElementChild.style.color = 'orange';
takeOut.firstElementChild.style.fontWeight = 'bold';
takeOut.lastElementChild.textContent = 'Hello i am the last child of this family';
takeOut.lastElementChild.style.backgroundColor = 'green';
takeOut.lastElementChild.style.color = 'white';

