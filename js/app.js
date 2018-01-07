const title = document.getElementById('title');
title.innerHTML = "Note";

const description =document.getElementById('description');


// const items= document.getElementsByClassName('list-group-item');
// const items = document.getElementsByTagName('li');

const items = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < items.length; i++) {
	let element = items[i];
	element.style.background = '#f2f2f2';
}

const button = document.querySelector('.btn.btn-primary');
console.log(button);

button.addEventListener('click', function(e){
 	
 	if (title.style.display != 'none') {
 		title.style.display = 'none';
 		description.style.display = 'none';
 		// e.target.textContent =  'Show';
 		this.textContent = 'show'
 	}else{
 		title.style.display = 'block';
 		description.style.display = 'block';
 		e.target.textContent = 'Not Show';
 	}
  // console.log('test');
});


button.addEventListener('mouseenter', function(e){
 this.className = 'btn btn-danger';
	
});

button.addEventListener('mouseout', function(e){
 this.className = 'btn btn-primary';
	
});


