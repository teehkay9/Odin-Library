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
  // reset the current table
  const bookRows = document.querySelectorAll(".book-row");
  bookRows.forEach((book) => {
    book.remove();
  });

  // add new table row
  for (let i = 0; i < myLibrary.length; i++) {
    const currentBook = myLibrary[i];
    const newRow = document.createElement("tr");
    newRow.classList.add(`array-index-${i}`, "book-row");

    // Create table cells with book information
    for (let key in currentBook) {
      let bookInfo = document.createElement("td"); // Correctly create a <td> element
      bookInfo.textContent = currentBook[key]; // Correctly access the property value
      newRow.appendChild(bookInfo); // Append <td> to the <tr>
    }
    // add a remove button at the end of each row
    const removeButtonCell = document.createElement("td");
    removeButtonCell.classList.add("remove-button-cell");

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "X";

    removeButtonCell.appendChild(removeButton);

    // add event Listener to the remove button
    removeButton.addEventListener("click", function (event) {
      const clickedButton = event.target;
      // get the nearest ancestor <tr> element
      const tableRow = clickedButton.closest("tr");

      if (tableRow) {
        tableRow.remove();

        // delete the object in myLibrary array
        // retrieve dynamic part of the "array-index" class
        const arrayIndexClass = Array.from(newRow.classList).find((className) => className.startsWith("array-index-"));
        const index = arrayIndexClass.split("-")[2];
        myLibrary.splice(index, 1);
        displayBooks();
      }
    });

    newRow.appendChild(removeButtonCell);

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

    // Create an event listener for the submit button
    submitButton.addEventListener("click", function () {
      const title = titleInput.value;
      const author = authorInput.value;
      const pages = pagesInput.value;
      const read = readInput.value;

      // Clear the form inputs
      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";
      readInput.value = "";

      const newBook = new Book(title, author, pages, read);
      addBookToLibrary(newBook);
      displayBooks();

      // Clear the form inputs
      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";
      readInput.value = "";
    });
  }
});

// addBookToLibrary(theHobbit);
// addBookToLibrary(theAlchemist);

displayBooks();
