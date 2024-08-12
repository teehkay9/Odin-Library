const myLibrary = [];
const libraryTable = document.querySelector("table");

// constructor function for Book object
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 265, "not read yet");
const theAlchemist = new Book("The Alchemist", "Paulo Coelho", 444, "read");

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

// Populate the table with the books in the library
function displayBooks() {
  for (let book of myLibrary) {
    const newRow = document.createElement("tr");

    // Create table cells with book information
    for (let key in book) {
      let bookInfo = document.createElement("td"); // Correctly create a <td> element
      bookInfo.textContent = book[key]; // Correctly access the property value
      newRow.appendChild(bookInfo); // Append <td> to the <tr>
    }

    // Append the new row to the table
    libraryTable.appendChild(newRow);
  }
}

addBookToLibrary(theHobbit);
addBookToLibrary(theAlchemist);

displayBooks();
