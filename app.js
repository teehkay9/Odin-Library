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
document.querySelector(".add-button").addEventListener("click", function () {
  // Find the main-right container
  const mainRight = document.querySelector(".main-right");

  // Check if the form already exists
  const existingForm = document.getElementById("add-book-form");

  if (existingForm) {
    // If the form exists, remove it
    mainRight.removeChild(existingForm);
  } else {
    // If the form doesn't exist, create and append it

    // Create the form element
    const form = document.createElement("form");
    form.setAttribute("action", "#");
    form.setAttribute("method", "post");
    form.setAttribute("id", "add-book-form");

    // Create the label and input for Title
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("required", true);

    // Create the label and input for Author
    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.textContent = "Author";

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("required", true);

    // Create the label and input for Pages
    const pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.textContent = "Pages";

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "text");
    pagesInput.setAttribute("id", "pages");
    pagesInput.setAttribute("name", "pages");

    // Create the label and input for Read Status
    const readLabel = document.createElement("label");
    readLabel.setAttribute("for", "read");
    readLabel.textContent = "Read Status";

    const readInput = document.createElement("input");
    readInput.setAttribute("type", "text");
    readInput.setAttribute("placeholder", "Type 'yes' or 'no'");
    readInput.setAttribute("id", "read");
    readInput.setAttribute("name", "read");

    // Create the Submit button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "button");
    submitButton.classList.add("add-book-button");
    submitButton.textContent = "Submit";

    // Append the label and input pairs to the form
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    form.appendChild(readLabel);
    form.appendChild(readInput);

    // Append the submit button to the form
    form.appendChild(submitButton);

    // Append the form to the main-right container
    mainRight.appendChild(form);
  }
});

addBookToLibrary(theHobbit);
addBookToLibrary(theAlchemist);

displayBooks();
