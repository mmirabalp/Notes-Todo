document.addEventListener('DOMContentLoaded', () => {
  console.log('test');
});


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
const row = document.querySelector('.row');

form.addEventListener('submit', function(event){
	event.preventDefault();
	let title_form = document.getElementById('title-form').value;
	let content_form = document.getElementById('content-form').value;
	// console.log(title_form);
	// console.log(content_form);

	create_card(title_form, content_form);
});
form.addEventListener('change', function(event){
	console.log('change value');
});

let div = null;
function create_card(title, content){

	    div = document.createElement('div');
		div.className = 'col-sm-6 col-md-4';

	let thumbnail = document.createElement('div');
		thumbnail.className = 'thumbnail';

	let caption = document.createElement('div');
		caption.className = 'caption';

	let h3 = document.createElement('h3');
		h3.textContent = title;

	let p1 = document.createElement('p');
		p1.textContent = content;

	let p2 = document.createElement('p');
	let a = document.createElement('a');
		a.className = 'btn btn-danger';
		a.textContent = 'Delete';
		p2.addEventListener('click', delete_card);

	p2.appendChild(a);
	caption.appendChild(h3);
	caption.appendChild(p1);
	caption.appendChild(p2);
	thumbnail.appendChild(caption);
	div.appendChild(thumbnail);
	row.appendChild(div);
}

function delete_card(event){
	let parent = get_parent(event.target, 4);
	row.removeChild(parent);

}

function get_parent(parent, level){
	if(level == 0 ){
		return parent;
	}
	level--;
	return get_parent(parent.parentElement, level);
}











