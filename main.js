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

function createBookElement(text, type) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
}

function createBook(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book");

  const elements = [
    createBookElement(book.title, "h2"),
    createBookElement(book.author, "h3"),
    createBookElement(book.pages, "p"),
    createBookElement(book.read, "p"),
  ];

  elements.forEach((element) => {
    bookCard.appendChild(element);
  });

  return bookCard;
}

function displayLibrary(array) {
  const bookContainer = document.querySelector("#books-container");
  array.forEach((book) => {
    const bookCard = createBook(book);
    bookContainer.appendChild(bookCard);
  });
}

displayLibrary(myLibrary);
