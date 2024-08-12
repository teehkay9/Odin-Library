const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 265, "not read yet");
const theAlchemist = new Book("The Alchemist", "Paulo Coelho", 444, "read");

myLibrary.push(theHobbit);
myLibrary.push(theAlchemist);

function addBookToLibrary() {
  // get user's input for book details
  bookTitle = prompt("Please enter the title of the book.");
  bookAuthor = prompt("Please enter the author of the book.");
  bookPages = prompt("Please enter the number of pages the book has.");
  bookStatus = prompt("Enter 'read' if you've read the book, otherwise enter 'not read'.");

  // create a Book object and add it to library
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);

  myLibrary.push(newBook);
}
