const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
addBookToLibrary(theHobbit);

const ucazz = new Book("puzzo", "sporco", 295, "Not read yet");
addBookToLibrary(ucazz);

console.log(myLibrary);

function displayLibrary(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

displayLibrary(myLibrary);
