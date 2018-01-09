const title = document.getElementById('title');

const description =document.getElementById('description');


// const items= document.getElementsByClassName('list-group-item');
// const items = document.getElementsByTagName('li');

const items = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < items.length; i++) {
	let element = items[i];
	element.style.background = '#f2f2f2';
}


const form = document.getElementById('form');
console.log(form);
