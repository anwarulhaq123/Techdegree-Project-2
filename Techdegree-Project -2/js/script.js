/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/



// Delaring the Two Globel Variables.

const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;

// function 'show page' to show only 10 students per page.
function showPage(list, page) {
	const startIndex = (page * studentsPerPage) - studentsPerPage;
	const endIndex = page * studentsPerPage;
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			list[i].style.display = 'block';
		} else {
			list[i].style.display = 'none';
		}
	}
}

//function to create new elements.
const createElement = element => {
	const tag = document.createElement(element);
	return tag;
};

const totalPages = list => {
	if (list.length % studentsPerPage > 0) {
		return list.length / studentsPerPage + 1;
	}
	return list.length / studentsPerPage;
};
//appendPageLinks function` to generate, append, and add functionality to the pagination buttons.

function appendPageLinks(list) {
	const numberOfPages = totalPages(list);
	const div = createElement('div');
	const ul = createElement('ul');

	div.className = 'pagination';

	document.querySelector('.page').appendChild(div);

	div.appendChild(ul);
	// function to create the link of Pages.
	function numbers(page) {
		for (let i = 1; i <= page; i++) {
			const li = createElement('li');
			const a = createElement('a');
			a.href = '#';
			li.className = 'links';
			ul.appendChild(li);
			a.textContent = i;
			li.appendChild(a);
		}
	}
	//Call to function to show the number of pages on the web.
	numbers(numberOfPages);

	//event listener for the click  to pagination links.
	ul.addEventListener('click', e => {
		e.preventDefault();
		const a = document.querySelectorAll('a');
		for (let i = 0; i < a.length; i += 1) {
			a[i].classList.remove('active');
			if (a[i].textContent === e.target.textContent) {
				e.target.className = 'active';
				showPage(studentList, e.target.textContent);
			}
		}
	});
}
//call to 'sohwPage'function to show required number of students  per Page.
showPage(studentList, 1);
appendPageLinks(studentList);
