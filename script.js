//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.getElementById('book-form');
  const bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', function (e) {
    e.preventDefault();

	 const titleInput = document.getElementById('title');
     const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

	 if (title && author && isbn) {
      addBookToTable(title, author, isbn);
      clearFormInputs(titleInput, authorInput, isbnInput);
    } else {
      alert('Please fill in all the fields.');
    }
  });

	 bookList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      e.target.parentElement.parentElement.remove();
    }
  });

	function addBookToTable(title, author, isbn) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="delete">Clear</button></td>
    `;
    bookList.appendChild(row);
  }

function clearFormInputs(...inputs) {
    inputs.forEach(input => (input.value = ''));
  }
});	